import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://7ouzz-coder.github.io',
  base: '/portafolio-guillermo',
  integrations: [tailwind()],
  // Configuración para generación de sitio estático
  output: 'static',
});