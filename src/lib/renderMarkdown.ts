import { marked } from 'marked';

export const renderMarkdown = (source: string) => marked.parse(source, { gfm: true, breaks: false });
