# Reference Policy

References improve fidelity but are never required.

## Roles

| Role | Controls | Must not control |
| --- | --- | --- |
| `project_fact` | Verified product/project information | Style invention or unrelated claims |
| `product_appearance` | Product UI, hardware, packaging, physical form | New features or fake states |
| `logo` | Logo shape, color, clear space | Layout and unrelated branding |
| `layout` | Composition, hierarchy, safe areas, old-character placement | Old text, logos, QR, people, event claims |
| `style` | Palette rhythm, material language, illustration/photography treatment | Facts and exact content |
| `ip_character` | Character appearance, silhouette, face, clothing, color, material | Poster facts or layout copy |
| `qr` | The exact real QR bitmap | Redrawing, recoloring, rotating, filtering, or re-encoding |

## Rules

- Give every reference exactly one primary role.
- Prefer project-owned materials over arbitrary visual references.
- Treat independent IP reference as the character truth source; do not fuse it with a character in a layout reference.
- Treat layout/style references as inspiration for structure only. Never copy their old words, logos, people, claims, or QR codes.
- Use product screenshots as image inputs without stretching. Keep essential UI legible when it is part of the communication goal.
- When no reference exists, state that the model must build a project-specific direction from facts and the style contract.
- The host adapter may express a source as a URL, data URL, asset ID, or local file converted before API submission.

## Series Reference Method

For a segmented series:

1. Use project-owned references and selected style references to establish the first accepted visual.
2. Use that accepted visual as the primary style/layout reference for later segments when supported.
3. Add only the minimum product, logo, or IP reference needed by the current segment.
4. Do not upload every historical reference for every image; it increases style conflict and fact leakage.
