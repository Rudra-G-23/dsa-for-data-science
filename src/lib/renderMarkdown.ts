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
    const headingLink = depth >= 2 && depth <= 3 ? `<a class="heading-link" href="#${prefix}${id}" data-copy-heading-url aria-label="Copy link to ${text}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07l-.81.81M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 1 0 7.07 7.07l.81-.81"/></svg></a>` : '';
    const backLink = depth >= 2 && depth <= 3 ? `<a class="heading-back" href="#${contentsId}" aria-label="Back to contents">↑</a>` : '';
    const copyButton = /prompt/i.test(text) ? `<button class="prompt-copy-button" data-copy-heading data-copy-depth="${depth}" aria-label="Copy prompt section">Copy prompt</button>` : '';
    return `<h${depth} id="${prefix}${id}"><span class="heading-title">${text}</span>${headingLink}${copyButton}${backLink}</h${depth}>\n`;
  };
  return marked.parse(source, { gfm: true, breaks: false, renderer });
};
