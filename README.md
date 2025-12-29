# Molley Documentation

This repository hosts the Molley documentation site powered by VitePress and deployed via GitHub Pages.

## Tech Stack

- **Static Site Generator**: [VitePress](https://vitepress.dev/)
- **Runtime**: Node.js
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## Local Development

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run docs:dev
```

Visit <http://localhost:5173> to preview changes.

## Build

Generate static files for production:
```bash
npm run docs:build
```

Preview the production build:
```bash
npm run docs:preview
```

## Project Structure

```
.
├── .vitepress/
│   ├── config.mts          # VitePress configuration
│   └── dist/               # Build output (generated)
├── guide/
│   ├── index.md            # Getting Started
│   └── installation.md     # Installation guide
├── index.md                # Home page
└── package.json            # Dependencies and scripts
```

## Deployment

Deployment is automated via GitHub Actions. On every push to `main`, the workflow:
1. Installs dependencies
2. Builds the VitePress site
3. Deploys to GitHub Pages

The site is available at: https://docs.molley.io

## Writing Documentation

VitePress uses Markdown with additional features:

- **Front matter**: Configure page layout and metadata
- **Vue components**: Embed interactive components
- **Code blocks**: Syntax highlighting with line numbers
- **Custom containers**: Info, warning, danger boxes

See the [VitePress documentation](https://vitepress.dev/guide/markdown) for more details.