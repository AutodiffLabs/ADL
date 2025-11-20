import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base: './' ensures assets are linked relatively.
  // This is crucial for GitHub Pages where your site might be at myuser.github.io/repo-name/
  base: '/autodifflabs/', 
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});