# Image Specifications

## Presets

| Asset type | Dimensions | Notes |
| --- | ---: | --- |
| `project_cover` | 1080x1440 | Default SynNovator portrait project cover |
| `portrait_poster` | 1080x1440 | General portrait social poster |
| `opc_portrait_poster` | 1078x1440 | OPC-compatible portrait reference system |
| `social_long_poster` | 1080x1920 | Story/朋友圈 style vertical communication |
| `landscape_project_showcase` | 1440x1080 | Project cover plus editable information layout context |
| `landscape_banner` | 1920x1080 | Wide campaign or platform banner |
| `long_graphic_light` | 1080x1300-1600 | One light information section |
| `long_graphic_medium` | 1080x1700-2000 | Several modules with moderate copy |
| `long_graphic_heavy` | 1080x2100-2600 | Timeline, rules, rewards, or organization-heavy section |

The bundled job builder uses representative heights 1500, 1900, and 2400 for the three long-graphic density levels. Supply explicit dimensions when the platform has a precise requirement.

## Selection Rules

- Use explicit platform dimensions when provided.
- Preserve supplied product screenshots and covers with contain/crop rules; never stretch them.
- Keep all critical text, logos, and product UI inside a safe area.
- Make the project recognizable at thumbnail size.
- Prefer less on-image text. Use the exact text whitelist for any visible text.
- For dense factual communication, split content rather than shrinking text below mobile readability.

## Multi-Image Long Graphics

- Split by natural content responsibility, never by a fixed image count or equal heights.
- State what each segment includes and excludes.
- Do not rely on cross-image lines, routes, arrows, bodies, characters, or decorations aligning across seams.
- Keep width, background system, section header, card language, type hierarchy, and margins consistent.
- Let the first image establish the visual system. Use the first accepted content image as the primary style reference for later segments when the host supports reference inputs.
- Add height or another segment for long official text; never summarize verified facts merely to fit.
- Generate only real QR codes supplied by the host. Otherwise use no QR or a clearly declared clean placeholder if the product specification requires one.
