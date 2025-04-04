import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://7ouzz-coder.github.io',
  base: '/portafolio-guillermo',
  integrations: [tailwind()],
  output: 'static',
});