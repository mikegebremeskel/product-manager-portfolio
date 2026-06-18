// Prepend BASE_URL to root-relative asset paths in Markdown.
// Markdown authors write `/assets/foo.png`; with a project base like
// `/product-manager-portfolio`, the deployed path must be
// `/product-manager-portfolio/assets/foo.png`. This handles that without
// requiring authors to know the base.
import { visit } from 'unist-util-visit';

export default function remarkBaseUrl() {
  const raw = process.env.SITE_BASE ?? '/product-manager-portfolio';
  const base = raw.endsWith('/') ? raw.slice(0, -1) : raw;
  if (base === '') return () => {};

  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'image' && typeof node.url === 'string' && node.url.startsWith('/') && !node.url.startsWith('//')) {
        node.url = base + node.url;
      }
      if (node.type === 'link' && typeof node.url === 'string' && node.url.startsWith('/') && !node.url.startsWith('//')) {
        node.url = base + node.url;
      }
    });
  };
}
