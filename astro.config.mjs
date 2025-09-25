import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://luiscornejo1.github.io', // ← Cambiarás esto después
  base: 'ciscoresponsive', // ← Cambiarás esto después
  output: 'static', // ← Para sitios estáticos
  build: {
    assets: 'assets'
  }
});
