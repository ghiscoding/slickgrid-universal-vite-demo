import dns from 'dns';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/slickgrid-universal-vite-demo/' : './',
    build: {
      chunkSizeWarningLimit: 6000,
      emptyOutDir: true,
    },
    optimizeDeps: {
      include: ['jquery'],
    },
    preview: {
      port: 3000
    },
    server: {
      port: 3000,
      cors: true,
      host: 'localhost',
    },
  };
});