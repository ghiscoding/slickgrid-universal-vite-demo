import dns from 'dns';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  base: '/slickgrid-universal-vite-demo/',
  build: {
    chunkSizeWarningLimit: 6000,
  },
  optimizeDeps: {
    include: ["jquery"],
  },
  server: {
    port: 3000,
    cors: true,
    host: 'localhost',
  },
});