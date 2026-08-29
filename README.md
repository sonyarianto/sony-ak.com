# sony-ak.com

Personal website and knowledge center of Sony AK (Sony Arianto Kurniawan), Member of Technical Staff.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4

## Features

- **Home** — personal landing page with links
- **Knowledge Center** — 860+ articles on software engineering, auto-tagged and searchable with load-more pagination

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format:fix` | Format code with Prettier |

## Articles

Articles are stored as `.mdx` files in the `articles/` directory with YAML frontmatter:

```yaml
---
title: "Article Title"
date: "2024-09-18T03:40:00.000Z"
description: "Short description..."
tags: ["javascript", "web"]
---
```

To add a new article, create a `.mdx` file in `articles/` — it will appear automatically.

## License

[MIT](LICENSE)
