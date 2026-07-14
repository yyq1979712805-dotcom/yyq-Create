#!/usr/bin/env python3
"""Build and validate SynNovator CGOS Image2 visual jobs."""

from __future__ import annotations

import argparse
import copy
import json
import pathlib
from typing import Any


DIMENSION_PRESETS = {
    "project_cover": {"width": 1080, "height": 1440},
    "portrait_poster": {"width": 1080, "height": 1440},
    "opc_portrait_poster": {"width": 1078, "height": 1440},
    "social_long_poster": {"width": 1080, "height": 1920},
    "landscape_project_showcase": {"width": 1440, "height": 1080},
    "landscape_banner": {"width": 1920, "height": 1080},
    "long_graphic_light": {"width": 1080, "height": 1500},
    "long_graphic_medium": {"width": 1080, "height": 1900},
    "long_graphic_heavy": {"width": 1080, "height": 2400},
}

REFERENCE_ROLES = {
    "project_fact",
    "product_appearance",
    "logo",
    "layout",
    "style",
    "ip_character",
    "qr",
}

FORBIDDEN_STYLE_TERMS = {
    "cheap-blue-purple-gradient",
    "generic-ai",
    "glassmorphism",
    "metallic-sci-fi",
    "stale-cyberpunk",
    "government-notice",
    "corporate-ppt",
    "ecommerce-detail-page",
    "colored-underlay-slabs",
}

NEGATIVE_STYLE_RULES = [
    "廉价蓝紫渐变",
    "玻璃拟态",
    "金属质感与复杂光效",
    "俗套赛博朋克",
    "政府通知风",
    "企业 PPT 风",
    "电商详情页风",
    "无意义粒子、发光网络或科技地球",
    "泛化 AI 机器人、大脑或芯片",
    "卡片下方彩色色块或装饰性底板",
    "素材网站模板拼贴感",
]


def _project_text(project: dict[str, Any]) -> str:
    fields = [
        project.get("name", ""),
        project.get("summary", ""),
        project.get("industry", ""),
        project.get("product_form", ""),
        " ".join(project.get("audience", [])),
    ]
    return " ".join(str(value).lower() for value in fields)


def select_style(project: dict[str, Any]) -> dict[str, str]:
    text = _project_text(project)
    if any(term in text for term in ("industrial", "制造", "supply", "生产", "物流")):
        return {
            "id": "editorial-industrial-systems",
            "name": "工业系统编辑视觉",
            "direction": "当代编辑网格、流程切片、设备与数据关系、克制高对比",
        }
    if any(term in text for term in ("culture", "文化", "education", "教育", "social")):
        return {
            "id": "contemporary-editorial-illustration",
            "name": "当代编辑插画",
            "direction": "清晰叙事、人物与场景隐喻、现代出版物构图",
        }
    if any(term in text for term in ("consumer", "消费", "retail", "零售", "brand")):
        return {
            "id": "minimal-product-campaign",
            "name": "极简产品传播视觉",
            "direction": "明确产品主体、品牌摄影感、少量高识别图形与大标题",
        }
    if any(term in text for term in ("data", "数据", "finance", "金融", "analytics")):
        return {
            "id": "editorial-data-narrative",
            "name": "编辑式数据叙事",
            "direction": "数据关系、信息层级与抽象图形共同建立可信度",
        }
    return {
        "id": "contemporary-tech-editorial",
        "name": "当代科技编辑视觉",
        "direction": "大字排版、产品界面切片、抽象功能隐喻与现代网格",
    }


def select_dimensions(payload: dict[str, Any]) -> dict[str, int]:
    supplied = payload.get("dimensions")
    if isinstance(supplied, dict) and supplied.get("width") and supplied.get("height"):
        return {"width": int(supplied["width"]), "height": int(supplied["height"])}
    return copy.deepcopy(DIMENSION_PRESETS.get(payload.get("asset_type"), DIMENSION_PRESETS["project_cover"]))


def normalize_job(payload: dict[str, Any]) -> dict[str, Any]:
    job = copy.deepcopy(payload)
    project = job.setdefault("project", {})
    project_name = project.get("name", "未命名项目")
    job["dimensions"] = select_dimensions(job)
    job.setdefault("reference_assets", [])
    job.setdefault("exact_text_whitelist", [project_name])
    job.setdefault("facts", [])
    job.setdefault("visual_must_include", [])
    job.setdefault("visual_must_avoid", [])
    job.setdefault("output_count", 1)
    job["selected_style"] = job.get("selected_style") or select_style(project)
    job["style_rationale"] = (
        f"{project_name} 的行业、产品形态、受众和传播目标适合"
        f"“{job['selected_style']['name']}”：{job['selected_style'].get('direction', '')}。"
        "该方向突出项目机制和产品识别度，避免套用泛化 AI 科技模板。"
    )
    return job


def validate_job(job: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    project = job.get("project") or {}
    if not project.get("name"):
        errors.append("project.name is required")
    dimensions = job.get("dimensions") or {}
    if not isinstance(dimensions.get("width"), int) or dimensions.get("width", 0) <= 0:
        errors.append("dimensions.width must be a positive integer")
    if not isinstance(dimensions.get("height"), int) or dimensions.get("height", 0) <= 0:
        errors.append("dimensions.height must be a positive integer")
    style = job.get("selected_style") or {}
    style_text = f"{style.get('id', '')} {style.get('name', '')}".lower()
    if any(term in style_text for term in FORBIDDEN_STYLE_TERMS) or "廉价蓝紫渐变" in style_text:
        errors.append("selected style is forbidden by the visual policy")
    for index, reference in enumerate(job.get("reference_assets", [])):
        if reference.get("role") not in REFERENCE_ROLES:
            errors.append(f"reference_assets[{index}].role must be one of {sorted(REFERENCE_ROLES)}")
        if not reference.get("source"):
            errors.append(f"reference_assets[{index}].source is required")
    return errors


def _bullet_lines(values: list[str], empty: str) -> str:
    return "\n".join(f"- {value}" for value in values) if values else f"- {empty}"


def _reference_rules(references: list[dict[str, Any]]) -> str:
    if not references:
        return "- 本任务没有参考附件。根据项目事实和视觉合同独立构图，不得因缺少参考图降低项目针对性。"
    lines = []
    for reference in references:
        lines.append(f"- {reference['role']}: {reference['source']}。只承担该角色，不得覆盖项目事实或引入旧文字、旧 Logo、旧二维码。")
    return "\n".join(lines)


def render_cgos_v4_prompt(job: dict[str, Any]) -> str:
    errors = validate_job(job)
    if errors:
        raise ValueError("; ".join(errors))
    project = job["project"]
    dimensions = job["dimensions"]
    style = job["selected_style"]
    exact_text = _bullet_lines(job.get("exact_text_whitelist", []), "不强制生成画面文字")
    facts = _bullet_lines(job.get("facts", []), "只使用项目简介中的已知事实")
    must_include = _bullet_lines(job.get("visual_must_include", []), "项目主体、核心机制与明确传播焦点")
    must_avoid = _bullet_lines(job.get("visual_must_avoid", []) + NEGATIVE_STYLE_RULES, "陈旧模板化视觉")
    audience = "、".join(project.get("audience", [])) or "赛事评委与潜在用户"
    colors = "、".join(project.get("brand_colors", [])) or "根据项目气质选择克制且高识别的当代配色"
    references = _reference_rules(job.get("reference_assets", []))
    size = f"{dimensions['width']}x{dimensions['height']}"
    negative = "。不要".join(NEGATIVE_STYLE_RULES)
    return f"""【CGOS设计提示词｜cgos_design_prompt_v4】

【一、任务输入】
项目名称：{project.get('name', '')}
项目简介：{project.get('summary', '')}
行业/赛道：{project.get('industry', '')}
产品形态：{project.get('product_form', '')}
图片用途：{job.get('asset_type', 'project_cover')}
发布场景：{job.get('platform', 'synnovator')}
图片尺寸：{size}

【二、事实来源】
只使用以下项目事实，不得自行扩写、编造客户、奖项、数据、功能或商业成果：
{facts}

【三、这张图的单图职责】
为 {project.get('name', '')} 生成一张适合 {audience} 阅读的项目视觉。第一眼表达项目解决的问题和产品机制，第二眼形成独特品牌记忆。不要把画面做成可以替换标题后复用于其他项目的通用 AI 模板。

【四、画面文字白名单】
只允许出现以下文字；不得生成白名单之外的项目数据、奖项、客户、二维码或组织名称：
{exact_text}

【五、参考附件使用规则】
参考图不是必需条件。存在参考图时必须严格按角色使用：Layout/Style 只控制构图与视觉语言，Product 控制产品外观，Logo 控制标志，IP 控制角色外观，QR 必须保持真实可扫。不得复制参考图中的旧文字、旧活动、旧品牌、旧人物或旧二维码。
{references}

【六、项目视觉 Profile】
项目成熟度：{project.get('maturity', '')}
目标受众：{audience}
品牌色参考：{colors}
选择风格：{style.get('name', '')}
风格理由：{job.get('style_rationale', '')}

【七、视觉风格合同】
采用“{style.get('name', '')}”。视觉方向：{style.get('direction', '')}。
画面必须像当代主流科技、商业或文化媒体的定制项目视觉：有明确编辑判断、项目专属隐喻、成熟字体层级、克制配色和传播焦点。可以使用产品界面切片、抽象功能物体、流程关系、数据形态或行业场景，但必须服务项目本身。
禁止廉价蓝紫渐变、玻璃拟态、复杂金属光效、俗套赛博朋克、政府通知、企业 PPT、电商详情页、无意义粒子网络、科技地球、泛化 AI 机器人/大脑/芯片、素材网站拼贴和卡片下方彩色色块。

【八、版式与图片用途】
最终画布严格为 {size}。建立清晰的主视觉、项目名称区、核心价值区和必要留白。所有元素留在安全区内，禁止拉伸产品截图或 Logo，禁止额外画板背景和不可控裁切。封面必须在缩略图尺寸仍能识别项目主体。

【九、必须包含】
{must_include}

【十、必须避免】
{must_avoid}
- 不得虚构二维码、Logo、客户、奖项、数据、产品功能和人物身份。
- 不得仅更换标题与颜色来复用其他项目模板。
- 不得生成难以辨认的大段中文；优先让视觉表达承担信息。

【十一、最终输出要求】
输出 1 张 {size} 图片。构图完整、项目针对性强、视觉当代、不老套，适合 SynNovator 赛事项目展示和商业传播。严格遵守事实、文字白名单、参考图角色和禁用风格。

负向提示词：
不要{negative}。不要陈旧模板。不要伪中文。不要虚构事实。不要伪造二维码或 Logo。不要把项目做成通用 AI 科技海报。不要在任何卡片、面板或标题块下方叠加彩色装饰底板。
"""


def build_image2_request(job: dict[str, Any]) -> dict[str, Any]:
    normalized = normalize_job(job)
    errors = validate_job(normalized)
    if errors:
        raise ValueError("; ".join(errors))
    request: dict[str, Any] = {
        "prompt": render_cgos_v4_prompt(normalized),
        "size": f"{normalized['dimensions']['width']}x{normalized['dimensions']['height']}",
        "n": int(normalized.get("output_count", 1)),
        "response_format": "url",
        "metadata": {
            "project_name": normalized["project"]["name"],
            "asset_type": normalized.get("asset_type", "project_cover"),
            "platform": normalized.get("platform", "synnovator"),
            "style_id": normalized["selected_style"]["id"],
            "prompt_contract": "cgos_design_prompt_v4",
        },
    }
    if normalized.get("reference_assets"):
        request["input_images"] = [
            {"source": item["source"], "role": item["role"]}
            for item in normalized["reference_assets"]
        ]
    return request


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=pathlib.Path, help="Input project job JSON")
    parser.add_argument("--output", type=pathlib.Path, help="Write normalized package JSON")
    args = parser.parse_args()
    payload = json.loads(args.input.read_text(encoding="utf-8"))
    job = normalize_job(payload)
    errors = validate_job(job)
    if errors:
        raise SystemExit("Invalid job: " + "; ".join(errors))
    package = {
        "job": job,
        "image2_request": build_image2_request(job),
    }
    rendered = json.dumps(package, ensure_ascii=False, indent=2) + "\n"
    if args.output:
        args.output.write_text(rendered, encoding="utf-8")
    else:
        print(rendered, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
