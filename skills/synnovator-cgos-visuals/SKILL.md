---
name: synnovator-cgos-visuals
description: Use when creating SynNovator or competition project covers, promotional posters, landscape showcases, banners, social long images, or segmented long graphics from project materials, especially when Codex must choose a current project-appropriate visual style, apply CGOS V4 prompt rules, optionally use references, and prepare an OpenAI-compatible Image2 request.
---

# SynNovator CGOS Visuals

## Overview

Turn project facts into a project-specific visual direction, generation task, complete CGOS V4 prompt, and API-neutral Image2 request. Judge the style before writing the prompt; do not start from a generic technology-poster template.

## Workflow

1. Collect the project name, summary, industry, product form, maturity, audience, verified facts, exact permitted text, asset purpose, platform, brand colors, and optional references.
2. Read [style-selection.md](references/style-selection.md). Select one primary style based on the project's mechanism and audience. Record a concrete rationale.
3. Read [image-specifications.md](references/image-specifications.md). Select the asset type and dimensions. Explicit custom platform dimensions override presets.
4. Read [reference-policy.md](references/reference-policy.md) when references exist. References are optional; every supplied reference must have one declared role.
5. Read [cgos-v4-prompt-contract.md](references/cgos-v4-prompt-contract.md). Create one full V4 prompt per requested image. Never replace it with a short generic instruction.
6. Copy [job-template.json](assets/job-template.json) and fill it with verified project facts.
7. Run:

```bash
python3 scripts/visual_job.py /absolute/path/to/job.json --output /absolute/path/to/visual-package.json
```

8. Inspect `job.selected_style`, `style_rationale`, `dimensions`, `image2_request.prompt`, reference roles, exact text whitelist, and negative rules before passing the request to the host platform.
9. Let the host platform inject its OpenAI-compatible base URL, model name, and API key. Never add credentials to the job or generated package.

## Output Contract

Return:

- normalized project and asset data;
- selected contemporary style and project-specific rationale;
- dimensions and output count;
- optional role-scoped references;
- one complete `cgos_design_prompt_v4` prompt per output;
- an OpenAI-compatible Image2 request body containing prompt, size, count, optional input images, and non-sensitive metadata.

## Boundaries

- Do not operate CGOS queues, create worker packages, register results, run `review_commit`, write Feishu/Base records, operate browsers, or publish.
- Do not store base URLs, API keys, authorization headers, account identifiers, or other credentials.
- Do not invent capabilities, customers, awards, numbers, logos, QR codes, people, or competition results.
- Do not require reference images. When none exist, build the direction from project facts and the selected style contract.
- Do not copy old text, logos, QR codes, people, or claims from style/layout references.
- Do not reuse the same composition across projects by changing only title and color.

## Quality Gate

The package is ready only when:

- the style rationale names the project and explains why the direction fits;
- the selected style contains no forbidden visual trope;
- dimensions match the asset or explicit platform request;
- every reference has a valid role and source;
- the prompt contains every required V4 section;
- exact text and verified facts are bounded;
- the request contains no credentials or base URL.

Validate after editing the Skill:

```bash
python3 -m unittest discover -s tests -v
python3 /Users/earl/.codex/skills/.system/skill-creator/scripts/quick_validate.py .
```
