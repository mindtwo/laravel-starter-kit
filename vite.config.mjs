import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/apps/sample-app/sample-app.tsx', 'resources/css/main.css'],
      refresh: true,
    }),
    tailwindcss(),
    react(),
  ],
});
