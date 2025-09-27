import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/apps/laravel/laravel.tsx',
        'resources/js/service-worker.ts',
        'resources/css/main.css',
      ],
      refresh: true,
    }),
    tailwindcss(),
    react(),
  ],
});
