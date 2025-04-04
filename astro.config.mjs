import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// En astro.config.mjs
export default defineConfig({
    site: 'https://7ouzz-coder.github.io',
    base: '/7ouzz-coder.github.io',
    outDir: './docs', // Cambia el directorio de salida a docs
    output: 'static',
  integrations: [tailwind()],
});