import importlib.util
import json
import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "scripts" / "visual_job.py"


def load_module():
    spec = importlib.util.spec_from_file_location("visual_job", MODULE_PATH)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class VisualJobTests(unittest.TestCase):
    def setUp(self):
        self.module = load_module()
        self.project = {
            "project": {
                "name": "FlowPilot",
                "summary": "为中小制造企业提供 AI 驱动的生产排程与异常预警。",
                "industry": "industrial-ai",
                "product_form": "saas",
                "maturity": "growth",
                "audience": ["competition-judges", "investors"],
                "brand_colors": ["#151A22", "#B9FF35"],
            },
            "asset_type": "project_cover",
            "platform": "synnovator",
            "exact_text_whitelist": ["FlowPilot", "AI 生产排程", "异常预警"],
            "facts": ["服务中小制造企业", "提供生产排程与异常预警"],
        }

    def test_normalize_job_selects_project_specific_style_and_default_dimensions(self):
        job = self.module.normalize_job(self.project)
        self.assertEqual(job["dimensions"], {"width": 1080, "height": 1440})
        self.assertEqual(job["reference_assets"], [])
        self.assertTrue(job["selected_style"]["id"])
        self.assertIn("FlowPilot", job["style_rationale"])
        self.assertNotIn("generic-ai", job["selected_style"]["id"])

    def test_custom_dimensions_override_asset_defaults(self):
        payload = json.loads(json.dumps(self.project))
        payload["dimensions"] = {"width": 1600, "height": 900}
        job = self.module.normalize_job(payload)
        self.assertEqual(job["dimensions"], {"width": 1600, "height": 900})

    def test_reference_assets_are_optional_and_role_scoped(self):
        payload = json.loads(json.dumps(self.project))
        payload["reference_assets"] = [
            {"source": "asset://product-shot", "role": "product_appearance"},
            {"source": "asset://logo", "role": "logo"},
        ]
        job = self.module.normalize_job(payload)
        self.assertEqual(len(job["reference_assets"]), 2)
        self.assertEqual(self.module.validate_job(job), [])

    def test_validate_job_rejects_forbidden_style_and_unscoped_reference(self):
        job = self.module.normalize_job(self.project)
        job["selected_style"] = {"id": "cheap-blue-purple-gradient", "name": "廉价蓝紫渐变"}
        job["reference_assets"] = [{"source": "asset://unknown"}]
        errors = self.module.validate_job(job)
        self.assertTrue(any("forbidden" in error for error in errors))
        self.assertTrue(any("role" in error for error in errors))

    def test_render_prompt_contains_complete_cgos_v4_contract(self):
        job = self.module.normalize_job(self.project)
        prompt = self.module.render_cgos_v4_prompt(job)
        required_sections = [
            "【CGOS设计提示词｜cgos_design_prompt_v4】",
            "【一、任务输入】",
            "【二、事实来源】",
            "【三、这张图的单图职责】",
            "【四、画面文字白名单】",
            "【五、参考附件使用规则】",
            "【六、项目视觉 Profile】",
            "【七、视觉风格合同】",
            "【八、版式与图片用途】",
            "【九、必须包含】",
            "【十、必须避免】",
            "【十一、最终输出要求】",
            "负向提示词：",
        ]
        for section in required_sections:
            self.assertIn(section, prompt)
        self.assertIn("FlowPilot", prompt)
        self.assertIn("1080x1440", prompt)

    def test_image2_request_contains_no_credentials_or_base_url(self):
        job = self.module.normalize_job(self.project)
        request = self.module.build_image2_request(job)
        serialized = json.dumps(request, ensure_ascii=False)
        self.assertEqual(request["size"], "1080x1440")
        self.assertIn("prompt", request)
        self.assertNotIn("api_key", serialized.lower())
        self.assertNotIn("base_url", serialized.lower())
        self.assertNotIn("authorization", serialized.lower())


if __name__ == "__main__":
    unittest.main()
