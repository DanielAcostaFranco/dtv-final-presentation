# Presentation Template (React, no build)

A lightweight, single-page **scrolling presentation** built with React from a
CDN — **no build step, no install**. Just open `index.html` in a browser.

## Quick start

1. Open the folder in VS Code and start it one of two ways:
   - Right-click `index.html` → **Open with Live Server**, or
   - Run a static server: `python -m http.server 5500`, then visit
     `http://localhost:5500/`.
2. It ships with **example content**, so it renders right away.
3. Open `js/app.js` and replace the demo slides with your own.
4. Drop images into `pictures/` and `assets/`, and set the brand color in
   `css/styles.css` (`--accent`).

> After editing a `js/` file you may need a hard refresh. If a change doesn't
> show, bump the `?v=` number for that script in `index.html` (cache-busting).

## The one file you edit: `js/app.js`

Each slide is a `<Section>`. You only write **data** — the components handle the
layout, animations, and navigation.

```jsx
<Section id="intro" variant="alt" eyebrow="Overview" title="My title">
  <p className="lead">Any content goes here.</p>
</Section>
```

### `<Section>` props

| Prop | Values | What it does |
|------|--------|--------------|
| `id` | any unique string | Anchor + nav-dot target (must be unique) |
| `eyebrow` | string | Small label above the title |
| `title` | string | Big heading |
| `variant` | `""`, `"alt"`, `"dark"` | Visual theme. **`"dark"` also flips the logo to white automatically.** |
| `hero` | flag | Cover/title layout |
| `closing` | flag | Closing layout |

### Add or reorder slides — it just works

- **Add a slide:** copy a `<Section>` block and give it a new `id`.
- **Reorder / remove:** move or delete the `<Section>`.

The **nav dots**, **keyboard nav**, and **logo** read the sections straight from
the page, so there's **no list to keep in sync**. Just make sure every
`<Section>` has a unique `id`.

## Building blocks (in `js/components.js`)

Pass data, get a finished layout — the `.map()` and animations live inside.

| Component | Give it | Renders |
|-----------|---------|---------|
| `FeatureGrid` | `items={[{ icon, title, problem, did, impact, img?, url? }]}` | Grid of feature cards |
| `StatGrid` | `items={[{ num, label, hint? }]}` | Row of big-number stats |
| `CompareTable` | `heads={[...]}` `rows={[[metric, before, after]]}` | Before/after table |
| `PillarGrid` | `pillars={[{ icon, title, desc }]}` | 4-up pillar grid |
| `SplitList` | `left={{ title, items }}` `right={{...}}` (+ `third`…`seventh`) | Multi-column checklists |
| `MockBrowser` | `url="..."` + children | Browser-frame screenshot |
| `PhotoStrip` | `photos={[{ src, caption?, type? }]}` | Auto-scrolling photo strip |
| `Reveal` | `delay`, `as`, children | Fades content in on scroll |

### Filling a `PhotoStrip`

Keep each strip's media in its own folder, such as `pictures/meeting/` or
`pictures/team/`. In `js/pictures.js`, create a named group with
`createPictureGroup("meeting", [...])`; it turns each `file` into the correct
`src` automatically. Then pass that group to a strip:

```jsx
<PhotoStrip photos={MEETING_PICTURES} />
```

When its `photos` array is empty, `PhotoStrip` renders five captioned placeholder
cards, so the strip is never blank. Create another named group for a different
strip. Videos use `type: "video"`; reframe images with `position: "center 20%"`.

## Customize the look

| File | What's inside |
|------|----------------|
| `css/styles.css` | Design system: colors, spacing (`--accent`, etc.) |
| `js/chrome.js` | Logo image paths (light/white) |
| `assets/` | Logo images + screenshots |
| `pictures/` | Your photos and videos (listed in `js/pictures.js`) |

## The engine (no need to touch)

- `js/hooks.js` — `useReveal` (scroll animations), `useSectionIds` (auto section list).
- `js/components.js` — all the reusable UI components above.
- `js/chrome.js` — progress bar, nav dots, logo, background streaks.
- `js/keyboard.js` — arrow-key / space / Page / Home / End navigation.

## Tips

- Icons are just emoji — swap them for any you like.
- Use `variant="dark"` for dark slides; the logo switches to white on its own.
- Keep every `<Section id="...">` unique so it gets its own nav dot.
