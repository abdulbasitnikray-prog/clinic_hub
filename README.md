# Sahar Wand Health Clinic

A bilingual (Dari and English) clinic information website built with React, TypeScript, Vite, and Tailwind CSS. The site supports right-to-left Dari and left-to-right English, persistent light and dark themes, clinic/service information, and responsive layouts.

## Requirements

- Node.js 20.19 or later (or 22.12 or later, as required by Vite 8)
- npm (use the version provided with Node.js)

## Run locally

```powershell
npm ci
npm run dev
```

Vite prints the local development URL after startup. The app uses hash-based routing, so language and page paths appear after `#`, for example `/#/fa` or `/#/en/services`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run the TypeScript project build and create a production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally |
| `npm run lint` | Run Oxlint |

There is no separate test script configured in `package.json`; `npm run build` includes the TypeScript build check.

## Features and structure

- **Languages:** Dari (`fa`, RTL) and English (`en`, LTR). Language preference is stored in browser local storage.
- **Themes:** Light and dark modes are available in the navigation and mobile menu. The selected theme is stored in browser local storage; dark mode is the default.
- **Routes:** Home, About, Services, Endocrine Care, Patient Care, Contact, FAQ, and Privacy pages are available in both languages. Routes use `HashRouter` for static hosting compatibility.
- **Clinic information:** Edit names, contact numbers, location, hours, and map destination in `src/data/clinic.ts`.
- **Translations and media:** Shared language strings are in `src/data/translations.ts`; image URLs and accessible text are centralized in `src/data/media.ts`.

## Images

Original image files are retained in `img/`. The named files used by the app are in `public/images/` so Vite copies them directly to every deployment's `dist/images/` directory.

| File in `public/images/` | Usage |
| --- | --- |
| `logo.png` | Transparent clinic logo used in the navbar, footer, mobile menu, and favicon |
| `clinic-hero.jpeg` | Homepage hero |
| `clinic-interior.jpeg` | Homepage nursing/care section and About page |
| `endocrine-care.jpeg` | Homepage feature and Endocrine Care page |
| `womens-health.jpeg` | Homepage and Patient Care page |
| `pediatric-care.jpeg` | Emergency-care card on Services |
| `medical-team.jpeg` | Pediatric professionals card on Services |
| `pediatric-services.jpeg` | Pediatric services card on Services |
| `laboratory-services.jpeg` | Laboratory services card on Services |

To update an image, replace the corresponding file in `public/images/` and keep its filename, or change its URL and alt text in `src/data/media.ts`. The clinic content image panels use fixed heights with `object-fit: cover`; portrait/layout differences may crop image edges to fill their boxes. The logo is separately contained in its rectangular theme-aware frame.

## Production and deployment

### GitHub Pages

The GitHub Actions workflow at `.github/workflows/deploy.yml` deploys pushes to `main`. It builds with `GITHUB_PAGES=true`, which configures Vite to prefix static assets with `/clinic_hub/`.

To check the Pages build locally in PowerShell:

```powershell
$env:GITHUB_PAGES = "true"
npm run build
Remove-Item Env:GITHUB_PAGES
npm run preview
```

The GitHub repository's Pages setting must use **GitHub Actions** as its build and deployment source.

### Vercel and root-hosted builds

Build without `GITHUB_PAGES` set:

```powershell
npm run build
npm run preview
```

Vite then uses `/` as the asset base. `vercel.json` rewrites incoming paths to `index.html`; app navigation itself is hash-based.

## Deployment checklist

1. Run `npm ci`.
2. Run `npm run lint` and review any reported warnings.
3. Run `npm run build`.
4. Confirm the generated `dist/` contains `index.html`, `assets/`, and `images/`.
5. For GitHub Pages, ensure the workflow sets `GITHUB_PAGES=true`; for root-hosted deployment, leave it unset.
