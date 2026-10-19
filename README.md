# Krea Economics Club Website

Static two-page website for the Krea University Economics Club and Delta.

## Pages

- `index.html` — Economics Club home page and root deployment route
- `delta.html` — Delta festival page

Shared styles and browser interactions live in `assets/css/site.css` and `assets/js/site.js`. Images are stored in `assets/images/`.

## Local preview

From the project directory, run:

```powershell
py -m http.server 8000
```

Open `http://localhost:8000/` for the club home page or `http://localhost:8000/delta.html` for Delta.

The site is static and deployable to Vercel or GitHub Pages without a build step.
