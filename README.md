# 🚀 Histia — Coming Soon (technical test)

[![Status: Draft](https://img.shields.io/badge/status-draft-orange)](https://github.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A small, performant frontend demo for Histia (SaaS) — a localized "Coming Soon" page built with Next.js, TypeScript and Tailwind CSS. This repository is a technical test and demonstrates responsive layout, Intlayer-based i18n routing, and language-specific assets (mascot).

## 🧩 Stack

- Next.js 16.2.7 (App Router)
- React 19.2.4
- TypeScript ^5
- Tailwind CSS v4
- ESLint ^9
- PostCSS (via `postcss.config.mjs`)
- Intlayer for URL-based i18n routing

These versions match `package.json`.

## ✅ Prerequisites

- Node.js 18+ (LTS recommended)
- npm (or yarn / pnpm)
- Git (optional)

## ⚙️ Install & Run (local)

Clone and install:

```bash
git clone <repo-url>
cd histia_pract
npm install
```

Run the dev server:

```bash
npm run dev
# visit http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

Run linter:

```bash
npm run lint
```

## 📁 Project structure

- [app](app) — Next.js app router folder
	- [app/[locale]/coming-soon/page.tsx](app/%5Blocale%5D/coming-soon/page.tsx#L1-L140) — localized Coming Soon page
- public/ — static assets (mascots, images)
- proxy.ts — Intlayer/Proxy configuration for routing
- next.config.ts — Next.js configuration
- package.json — scripts & dependencies
- eslint.config.mjs — ESLint configuration

## 🔗 Routes / Available URLs

- `/coming-soon` — default (may redirect to locale)
- `/fr/coming-soon` — French version
- `/en/coming-soon` — English version

Open these URLs locally (e.g. `http://localhost:3000/fr/coming-soon`).

## 💡 Technical choices

- Intlayer (URL-based i18n):
	- We use Intlayer to handle locale routing via URL segments (`/fr` / `/en`). This keeps routing explicit and SEO-friendly, and it integrates cleanly with Next.js App Router.

- vw / vh units for layout:
	- The UI is optimized for two primary breakpoints (1920×1080 and 1400×900). Using `vw`/`vh` lets us scale positions and sizes proportionally across large displays while preserving the intended layout for full-bleed, design-driven pages like a marketing or coming-soon screen.

- `next/font` (built-in font optimization):
	- `next/font` (used via the project) automatically optimizes font loading and reduces CLS. It’s the recommended approach in the App Router for performance and better Core Web Vitals.

## 🎨 Visuals / Mascots

- The project serves a different mascot image depending on locale (e.g. `/img/mascot-fr.png` and `/img/mascot-en.png`) to demonstrate locale-aware assets.

## 🖼️ Screenshots (placeholders)

Replace these with real screenshots captured from the dev server.

- Desktop 1920×1080
	- `public/screenshots/coming-soon-1920.png`
	- ![1920x1080 placeholder](public/screenshots/coming-soon-1920.png)
- Desktop 1400×900
	- `public/screenshots/coming-soon-1400.png`
	- ![1400x900 placeholder](public/screenshots/coming-soon-1400.png)

## 🚀 Deployment

Planned to be deployed on Vercel — the project is App Router–ready and uses Vercel-friendly defaults. Add the repository to Vercel and set the build command to `npm run build`.

## 🧭 Where to look in the code

- Localized page: [app/[locale]/coming-soon/page.tsx](app/%5Blocale%5D/coming-soon/page.tsx#L1-L140)
- Proxy config: [proxy.ts](proxy.ts)
- Next config: [next.config.ts](next.config.ts#L1-L20)

## ✨ Next steps / suggestions

- Add real screenshots into `public/screenshots/`.
- Add `.github/copilot-instructions.md` if you want repo-specific Copilot behaviors.
- Add a small CI check (lint/build) to validate PRs.

---

Made with ❤️ for Histia — tech test demo.

