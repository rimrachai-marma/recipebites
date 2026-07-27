# Recipe Bites 🍲

A recipe collections built with [Astro](https://astro.build/) and a pinch of React — content collections for recipes, static pagination, GFM-flavored Markdown, and a small interactive "likes" widget. Currently seeded with sample recipes as a working demo of the layout and content model.

## Features

- **Content collections** — recipes are written in Markdown with a typed frontmatter schema (title, chef, rating, summary, hero image, gallery)
- **Static pagination** — recipe listing paginated 4-per-page with prev/next and numbered page navigation
- **GitHub Flavored Markdown** — tables, task-list checkboxes, and GitHub-style alert callouts (note / tip / important / warning / caution) render right in the recipe body
- **Recipe galleries** — optional "In the Making" step-by-step photo gallery per recipe
- **Interactive likes** — an "I made this!" button (React island) on every recipe page

## Tech Stack

- [Astro](https://astro.build) — static site generation, routing, content collections
- [React](https://react.dev) — for interactive islands (`Likes`)
- Markdown + GFM (via `remark-github-blockquote-alert`) for recipe content
- TypeScript

## Project Structure

```
/
├── public/                   # Static assets (favicon, logos)
├── src/
│   ├── components/           # Astro & React components
│   │   ├── RecipeCard.astro
│   │   └── Likes.tsx
│   ├── content/
│   │   └── recipes/          # One folder per recipe (index.md + images)
│   ├── content.config.ts     # Recipe collection schema
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── recipes/
│           ├── index.astro
│           ├── [id].astro    # Recipe detail page
│           └── page/[page].astro  # Paginated recipe listing
├── astro.config.mjs
└── package.json
```

## Adding a Recipe

Create a new folder under `src/content/recipes/` with an `index.md` file:

```
src/content/recipes/my-new-recipe/
└── index.md
```

Each recipe's frontmatter follows this schema:

```yaml
---
title: My New Recipe
chef: Your Name
rating: 9
summary: A short one-line summary of the recipe.
image: ./hero.jpg # optional
gallery: # optional
  - ./step-1.jpg
  - ./step-2.jpg
---
```

The rest of the file is the recipe itself, written in Markdown (GFM supported — tables, checkboxes, and `> [!TIP]`-style alerts all work).

## Development

```sh
npm install
npm run dev
```

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the production build locally       |

Requires Node.js `>=22.12.0`.

## License

Personal/demo project — code is free to poke around and borrow from.
