import inject from '@rollup/plugin-inject';
import dns from 'dns';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

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
    chunkSizeWarningLimit: 6000,
  },
  server: {
    port: 3000,
    cors: true,
    host: 'localhost',
  },
});