# SynNovator CGOS Visuals

Codex skill for preparing project-specific SynNovator and competition visual
generation packages.

It turns verified project facts into:

- a project-appropriate visual style decision;
- a complete `cgos_design_prompt_v4` prompt;
- an API-neutral Image2 request body;
- role-scoped reference guidance;
- basic validation tests for the generated package.

The skill is designed for project covers, promotional posters, landscape
showcases, banners, social long images, and segmented long graphics.

## Use

```text
Use $synnovator-cgos-visuals to analyze this project and prepare a
project-specific Image2 visual generation package.
```

## Validate

```bash
python3 -m unittest discover -s tests -v
```

The generated package intentionally contains no API keys, base URLs,
authorization headers, or account identifiers. The host runtime supplies model,
endpoint, authentication, transport, retry, storage, and billing behavior.
