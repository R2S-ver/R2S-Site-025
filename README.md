# RrSuika Studio — Portfolio Site

The personal portfolio of **RrSuika Studio** — industrial design × embedded systems × creative making.
Live at **[rrsuika-studio.pages.dev](https://rrsuika-studio.pages.dev)** (Cloudflare Pages).

> 中文简介：这是 RrSuika Studio 的个人作品集网站，展示工业设计、嵌入式系统与创意制造作品，全站支持英、中、荷三语（中文位于 `/zh`，荷兰语位于 `/nl`）。技术栈为 Astro 7 纯静态构建 + 原生 CSS/JS，内容以 Markdown 内容集合管理，推送 `main` 分支即自动部署。

## What's inside

| Section  | Route      | Content                                        |
| :------- | :--------- | :--------------------------------------------- |
| Home     | `/`        | Featured work, latest activity (SYS.LOG), explore modules |
| Projects | `/projects` | Industrial / product design projects          |
| Lab      | `/lab`     | Hardware experiments (ESP32, 3D printing, electronics) |
| Art      | `/art`     | Illustrations, fashion design, food art, posters |
| Notes    | `/notes`   | Electronics self-study notes                   |
| About    | `/about`   | Profile, design process, capability matrix     |

Every page exists in English, Chinese (`/zh/...`) and Dutch (`/nl/...`).

## Tech stack

- **Astro 7** — fully static output, zero integrations, zero client-side frameworks
- **zod** — content collection schema (`src/content.config.ts`)
- Vanilla CSS design system (`src/styles/global.css`) + minimal vanilla JS
- **Cloudflare Pages** — auto-deploys on every push to `main` (no CI config in this repo)

## Repository structure

```text
src/
├── content/entries/     # All site content: one folder per entry (en.md + cn.md + nl.md + images)
├── pages/               # Routes: static pages, zh/nl mirrors, 2 dynamic detail routes, sitemap, 404
├── components/          # Reusable UI (Navbar, Footer, ProjectCard, ProjectDetail, home sections…)
├── styles/global.css    # The single design-token source of truth
├── utils/               # routes / i18n / translations / images helpers
└── layouts/Layout.astro # The single site layout (SEO, theme, background layers)
public/                  # Favicons, og-card.png, robots.txt…
scripts/og-card-gen.mjs  # Regenerates public/og-card.png (npm run og-card)
```

## Adding content

Each piece of content is a folder in `src/content/entries/` containing `en.md`, `cn.md`, `nl.md` and its images.
The URL slug is the folder name — **no code changes are needed for a new entry**.

> For AI collaborators: read [`AI_CONTEXT.md`](AI_CONTEXT.md) first — it is the project's architecture
> memory (structure, routes, content schema, design tokens, decisions, tech debt, and a
> "where to change what" index). [`CLAUDE.md`](CLAUDE.md) holds the hard conventions.

## Development

```bash
npm install     # Node >= 22.12
npm run dev     # http://localhost:4321
npm run build         # static output to dist/
npm run check         # TypeScript / Astro diagnostics
npm run optimize-art  # regenerate art-optimized lossless webp assets (art only)
```

## Deployment

Push to `main` → Cloudflare Pages builds and deploys automatically.

## Links

- Website: [rrsuika-studio.pages.dev](https://rrsuika-studio.pages.dev)
- GitHub: [RrSuika](https://github.com/RrSuika)
- pixiv: [RrSuika Studio](https://www.pixiv.net/users/71884225)

© RrSuika Studio
