import inject from '@rollup/plugin-inject';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000
  }
});