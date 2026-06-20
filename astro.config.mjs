// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://runtenick.github.io',
  base: '/LouaneBreteaudeau',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
