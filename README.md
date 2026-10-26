# portfolio-react — a React portfolio starter

No live demo. The personal site at lr0y.dev is a different, later project; this repository is the first React
version, written in April 2026, and is kept as a starter template.

## What it is

A single-page portfolio built with React, Vite and Tailwind CSS. Content is read from `src/data/portfolio.json`,
which currently holds placeholder projects, skills and experience that you replace with your own.

## What it does

- Sections for hero, projects, skills, experience, contact and a call to action, plus pages for About, Portfolio,
  project detail and not found, routed with React Router.
- Dark and light theme toggle (`ThemeContext`).
- Service modules for a GitHub profile lookup, a contact form through formsubmit.co, analytics and a generic API
  client in `src/services/`. These are stubs with placeholder addresses.

## Known issues

The service modules read `process.env.REACT_APP_*`, which Vite does not define. Switch them to
`import.meta.env.VITE_*` before using the GitHub, email or API features.

## Built with

React 18, Vite 5, Tailwind CSS 3, React Router 6, Axios, ESLint and Prettier. Deploys to Vercel (`vercel.json`).

## Run it locally

Requires Node 18 or later.

```bash
npm install
npm run dev        # development server
npm run build      # production build into dist/
npm run preview    # serve the build
npm run lint
npm run format
```

## Layout

```
src/components/   common pieces, page sections, ui
src/pages/        route pages
src/context/      theme context
src/hooks/        custom hooks
src/services/     api, github, email, analytics
src/data/         portfolio.json content
src/styles/       stylesheets
```

MIT licence.

---

Versión en español: plantilla de portfolio personal en React + Vite + Tailwind (abril 2026) con tema oscuro y claro.
El contenido es de ejemplo y los servicios usan `process.env.REACT_APP_*`, que Vite no define: hay que migrarlos a
`import.meta.env.VITE_*`.
