# AGENTS.md

## Cursor Cloud specific instructions

### Node.js version

This project uses **Gulp 3** which is incompatible with Node.js >= 12 (`primordials is not defined` error). You **must** use Node.js 11 via nvm (`nvm use 11`). The nvm default is set to 11 in the snapshot.

### Build

```sh
npx gulp minifyJs   # minifies JS from src/ into dist/
```

### Dev server

The built-in `gulp watch` task (browser-sync) crashes on Node 11 because the installed `engine.io` version requires `Object.fromEntries` (Node 12+). Use Python's HTTP server as a workaround:

```sh
python3 -m http.server 3000 --directory src
```

Then open `http://localhost:3000/` to view the demo page with the animated SVG circle.

### No tests or linting

This project has no test framework and no linting configuration. The `scripts` section in `package.json` is empty.
