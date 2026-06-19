// Prepend a non-root base to root-relative paths in Markdown.
// The site serves from the custom domain at the root, so the default is no
// prefix. If SITE_BASE is set (e.g. /product-manager-portfolio to build for the
// github.io project URL), Markdown links and images are rewritten to match,
// without authors needing to know the base.
import { visit } from 'unist-util-visit';

export default function remarkBaseUrl() {
  const raw = process.env.SITE_BASE ?? '';
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
