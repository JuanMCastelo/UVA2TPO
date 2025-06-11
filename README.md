# Mi Cursada 2025

This repository contains a small static website used to keep track of a 2025 academic schedule. It is built with plain HTML, CSS and a little JavaScript. Bootstrap is loaded from a CDN so an internet connection is required when viewing the pages.

## Structure

```
assets/            Images used on the site
css/               Stylesheets
  style.css        Global styles and page-specific rules
js/
  script.js        Theme toggle and contact form validation
index.html         Home page with navigation and calendar
avisos.html        Page for news/announcements
sobremi.html       Information about the author
materias2025.html  Details of subjects for 2025
contacto.html      Contact form
disenoweb.html     Material for the "Diseño y Desarrollo Web" course
```

## Viewing locally

No build step is needed. Simply open `index.html` (or any of the HTML files) in your browser. You may also serve the directory with a small web server to avoid browser security restrictions:

```bash
python3 -m http.server
```

Then visit <http://localhost:8000> in your browser.

## Browser compatibility

The pages rely on standard HTML5, CSS and a bit of ES6 JavaScript. They work in all modern browsers such as recent versions of Chrome, Firefox, Edge and Safari. Internet Explorer is not supported.

## Deployment

Because the site is entirely static, you can deploy it by copying the files to any web server or by using a static hosting service like GitHub Pages.
