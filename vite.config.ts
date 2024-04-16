import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-free'],
  },
});