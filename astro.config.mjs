// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkBaseUrl from './src/lib/remark-base-url.mjs';

// Served from the custom domain mikegebremeskel.com at the root, so base is '/'.
// Both are overridable via env (e.g. SITE_BASE=/product-manager-portfolio to
// build for the github.io project URL again).
const SITE = process.env.SITE_URL || 'https://mikegebremeskel.com';
// Normalize: always trailing slash (Astro accepts both, but BASE_URL behavior
// is more reliable when explicit).
const RAW_BASE = process.env.SITE_BASE ?? '';
const BASE = RAW_BASE === '' || RAW_BASE === '/' ? '/' : (RAW_BASE.replace(/\/+$/, '') + '/');

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
