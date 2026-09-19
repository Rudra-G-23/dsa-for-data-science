import roadmapSource from '../../resources/DSA_for_Data_Science_ML_Master_Roadmap.md?raw';
import practiceSource from '../../resources/DSA_Practice_System_Free_Resources_Dependency_Safe.md?raw';

export type ContentHeading = { depth: number; title: string; slug: string };

const slugify = (value: string) => value
  .toLowerCase()
  .replace(/[`*_~]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const stageStart = (source: string, id: string) => {
  const pattern = new RegExp(`^# .*Stage\\s+${Number(id)}(?:\\s|[-—])`, 'mi');
  return source.search(pattern);
};

const stageMarkdown = (source: string, id: string) => {
  const start = stageStart(source, id);
  if (start < 0) return '';
  const rest = source.slice(start);
  const firstBreak = rest.indexOf('\n');
  const tail = firstBreak < 0 ? '' : rest.slice(firstBreak + 1);
  const end = tail.search(/^# (?!#)/m);
  return end < 0 ? rest : rest.slice(0, firstBreak + 1 + end);
};

export const headingsFor = (markdown: string): ContentHeading[] => {
  const seen = new Map<string, number>();
  return [...markdown.matchAll(/^(#{1,3})\s+(.+)$/gm)].map((match) => {
    const title = match[2].trim().replace(/\s+#+\s*$/, '');
    const base = slugify(title) || 'section';
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return { depth: match[1].length, title, slug: count ? `${base}-${count + 1}` : base };
  });
};

const dateFrom = (source: string, label: string) => source.match(new RegExp(`^\\*\\*${label}:\\*\\*\\s*(.+)$`, 'mi'))?.[1].trim() ?? '2026-09-18';

export const roadmapUpdated = dateFrom(roadmapSource, 'Research date');
export const practiceUpdated = dateFrom(practiceSource, 'Resource verification date');
export const roadmapHeadings = headingsFor(roadmapSource);
export const practiceHeadings = headingsFor(practiceSource);
export const roadmapHtmlSource = roadmapSource;
export const practiceHtmlSource = practiceSource;

export const stageContent = (id: string) => {
  const roadmap = stageMarkdown(roadmapSource, id);
  const practice = stageMarkdown(practiceSource, id);
  return {
    roadmap,
    practice,
    roadmapHeadings: headingsFor(roadmap),
    practiceHeadings: headingsFor(practice),
  };
};

export const sourcePath = {
  roadmap: 'resources/DSA_for_Data_Science_ML_Master_Roadmap.md',
  practice: 'resources/DSA_Practice_System_Free_Resources_Dependency_Safe.md',
};
