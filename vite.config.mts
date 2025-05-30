import dns from 'dns';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig(({ mode }) => {
  return {
    base: './',
    build: {
      chunkSizeWarningLimit: 6000,
      emptyOutDir: true,
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
