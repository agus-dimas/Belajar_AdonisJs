import { defineConfig } from 'vite';
import adonisjs from '@adonisjs/vite/client';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    adonisjs({
      entrypoints: ['resources/js/app.js', 'resources/css/app.css'], // Tambahkan CSS di sini
      reload: ['resources/views/**/*.edge'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
