import { marked, Renderer } from 'marked';

const slugify = (value: string) => value
  .toLowerCase()
  .replace(/<[^>]+>/g, '')
  .replace(/[`*_~]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

export const renderMarkdown = (source: string, prefix = '', contentsId = 'document-contents') => {
  const renderer = new Renderer();
  const seen = new Map<string, number>();
  renderer.heading = ({ text, depth }) => {
    const base = slugify(text) || 'section';
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = count ? `${base}-${count + 1}` : base;
    const backLink = depth >= 2 && depth <= 3 ? `<a class="heading-back" href="#${contentsId}" aria-label="Back to contents">↑</a>` : '';
    const copyButton = /prompt/i.test(text) ? `<button class="prompt-copy-button" data-copy-heading data-copy-depth="${depth}" aria-label="Copy prompt section">Copy prompt</button>` : '';
    return `<h${depth} id="${prefix}${id}"><span class="heading-title">${text}</span>${copyButton}${backLink}</h${depth}>\n`;
  };
  return marked.parse(source, { gfm: true, breaks: false, renderer });
};
