# CGOS V4 Prompt Contract

Every requested image receives a complete prompt. Do not use a global prompt followed by incomplete per-image fragments.

## Required Sections

1. `【CGOS设计提示词｜cgos_design_prompt_v4】`
2. `【一、任务输入】`
3. `【二、事实来源】`
4. `【三、这张图的单图职责】`
5. `【四、画面文字白名单】`
6. `【五、参考附件使用规则】`
7. `【六、项目视觉 Profile】`
8. `【七、视觉风格合同】`
9. `【八、版式与图片用途】`
10. `【九、必须包含】`
11. `【十、必须避免】`
12. `【十一、最终输出要求】`
13. `负向提示词：`

## Fact Rules

- State the verified facts available to this image.
- State which facts are outside this image when producing a series.
- Never invent clients, awards, usage numbers, revenue, partnerships, product functions, organization names, dates, rankings, or competition results.
- Never expose internal document links, workflow names, API configuration, or orchestration instructions inside the public image.

## Text Rules

- Use an exact text whitelist.
- Prefer short project name, one proposition, and a few verified labels.
- Do not ask Image2 to render large paragraphs when visual communication can carry the idea.
- Require clear Chinese when Chinese is allowed. Reject pseudo-Chinese and garbled characters.
- Do not generate QR codes unless a real QR reference is supplied.

## Composition Rules

- Express the project mechanism, not the generic category word “AI”.
- Make one visual idea dominant.
- Use project UI, objects, workflows, data relationships, or industry scenes only when they are grounded in the supplied project.
- Keep repeated modules consistent in size, padding, alignment, and hierarchy.
- Do not place colored slabs, duplicate plates, or offset blocks under cards, title slabs, stickers, or panels.
- Avoid generic dashboard/card-stack composition for expressive project covers.

## Negative Prompt Baseline

Include the task-specific risks plus this baseline:

```text
不要廉价蓝紫渐变。不要玻璃拟态。不要金属质感与复杂光效。不要俗套赛博朋克。不要政府通知风。不要企业 PPT 风。不要电商详情页风。不要无意义粒子、发光网络或科技地球。不要泛化 AI 机器人、大脑或芯片。不要素材网站模板拼贴。不要卡片下方彩色装饰底板。不要伪中文。不要虚构事实。不要伪造二维码或 Logo。不要把项目做成通用 AI 科技海报。
```

## Image2 Request Boundary

The generated request body may contain:

- prompt;
- size;
- output count;
- response format;
- optional reference inputs;
- non-sensitive metadata.

The host system supplies endpoint, model, authentication, transport, retry, storage, and billing behavior. Never put secrets or a fixed intermediary endpoint in the Skill.
