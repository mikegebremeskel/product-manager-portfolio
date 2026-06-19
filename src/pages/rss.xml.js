import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({ html: true, linkify: true });

export async function GET(context) {
  const site = context.site.toString().replace(/\/$/, ''); // https://mikegebremeskel.com
  const essays = (await getCollection('writing')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Mike Gebremeskel — Writing',
    description: 'Essays on product craft. What I have learned building and leading product.',
    site: context.site,
    items: essays.map((e) => {
      // Render the essay body to HTML and make asset + internal links absolute,
      // so the feed (and anything importing it) resolves images and links.
      const html = parser
        .render(e.body)
        .replace(/(src|href)="\/(assets|writing|work)\//g, `$1="${site}/$2/`);
      return {
        title: e.data.title,
        description: e.data.summary,
        pubDate: e.data.date,
        link: `/writing/${e.id}/`,
        content: html,
      };
    }),
    customData: '<language>en-us</language>',
  });
}
