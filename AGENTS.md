# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Pure JavaScript SVG circle animation library. No runtime dependencies. Uses Vite for dev server and library builds.

### Node.js version

Requires Node.js >= 18. The nvm default is set to 22 in the snapshot.

### Commands

See `scripts` in `package.json`:

- `npm run dev` — Vite dev server with HMR (serves `index.html` demo page)
- `npm run build` — Build ESM + UMD library bundles into `dist/`
- `npm run preview` — Preview production build

### No tests or linting

This project has no test framework and no linting configuration.
