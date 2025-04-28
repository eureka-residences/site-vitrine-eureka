import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  // base: '/site-vitrine-eureka',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
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