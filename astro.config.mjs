import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/astro/', // GitHub Pages用のベースURL
});