import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/circle-svg-animation.js'),
      name: 'CircleSVGAnimation',
      fileName: 'circle-svg-animation',
    },
  },
});
