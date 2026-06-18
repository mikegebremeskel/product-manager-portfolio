// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkBaseUrl from './src/lib/remark-base-url.mjs';

// Site URL is set at deploy time. Defaults to the github.io project page;
// override to the custom domain once it's purchased.
const SITE = process.env.SITE_URL || 'https://mikegebremeskel.github.io';
const BASE = process.env.SITE_BASE ?? '/product-manager-portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkBaseUrl],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
