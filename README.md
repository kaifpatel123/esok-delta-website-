# Economics Club Home (blue and white) — design reference

This is a design mockup created in a visual design tool, exported as a
standalone page. Treat it as a REFERENCE MOCKUP, not production code:
the markup and inline styles carry the design's precise values — colors,
font sizes, spacing, radii, shadows, layout — which an implementation
should replicate faithfully in its own components and styling system
rather than copy wholesale.

## Project structure

- `Main.dc.html` — main club landing page mockup
- `Delta.dc.html` — Delta festival landing page mockup
- `index.html` — static landing redirect for the root route on Vercel
- `assets/images/` — downloaded images and portraits used across the site
- `assets/vendor/` — React runtime files for the design component system
- `assets/js/support.js` — shared rendering/runtime logic for the mockup pages

## Local viewing

Serve the folder and open the site via a local HTTP server, for example:

`py -m http.server 8000`

Then browse to:

`http://localhost:8000/`

This setup is compatible with static deployment on Vercel and GitHub Pages-style hosting.
