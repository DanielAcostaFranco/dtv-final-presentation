# Presentation Template (React, no build)

A lightweight, single-page **scrolling presentation** built with React (loaded
from a CDN, no build step). Just open `index.html` in a browser.

## Quick start

1. Open `index.html` directly, or serve the folder:
   ```powershell
   python -m http.server 5500
   ```
   then visit `http://localhost:5500/`.
2. The template ships with **example content** so it renders right away.
   Edit `js/app.js` and replace the demo text with your own.
3. Drop your images into `pictures/` and `assets/`, then point the `src`/`img`
   values to them.
4. Change the brand color in `css/styles.css` (`--accent`) and the text logo in
   `js/chrome.js` (`Your Logo`).

## What to customize

| File | What's inside |
|------|----------------|
| `js/app.js` | All slide content (example text). Add/remove `<Section>` blocks and keep `SECTION_IDS` in sync. |
| `js/pictures.js` | The photo/video list for the "More About Me" strip. |
| `js/chrome.js` | Text logo + pillar step labels. |
| `css/styles.css` | Design system: colors, spacing, radius (`--accent`, etc.). |
| `assets/` | Logo images (`logo.png`, `logo_white.png`) and before/after screenshots. |
| `pictures/` | Your photos and videos. |

## Structure (the reusable engine — no need to touch)

- `js/hooks.js` — small React hooks (scroll reveal, keyboard nav).
- `js/components.js` — reusable UI pieces: `Section`, `FeatureCard`,
  `CompareRow`, `StatCard`, `InfoCard`, `MockBrowser`, `PillarGrid`,
  `SplitList`, `PhotoStrip`, `AboutSlideshow`.
- `js/chrome.js` — progress bar, nav dots, pillar stepper, logo.
- `js/keyboard.js` — arrow-key / space navigation.

## Tips

- Icons are just emoji — swap them for any you like.
- Slides with a dark background are listed in `DARK_SECTIONS` (`js/chrome.js`).
- To remove a slide, delete its `<Section>` and remove its id from
  `SECTION_IDS` (and from `PILLAR_OF` in `chrome.js` if present).
