import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  // base: '/site-vitrine-eureka',
  envPrefix: 'ERK_',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@site-config': path.resolve(__dirname, './src/site.config.ts'),
      '@components': path.resolve(__dirname, './src/components'),
      '@baselayout': path.resolve(__dirname, './src/components/baselayout'),
      '@types': path.resolve(__dirname, './src/types'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@features': path.resolve(__dirname, './src/features'),
    }
  }
});


// frontend/vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   base: './',
//   build: {
//     outDir: '../src/frontend/dist',
//     emptyOutDir: true,
//     assetsDir: 'assets',
//     // Utiliser des chemins relatifs
//   },
// })