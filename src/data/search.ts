import { site } from './site';
import { practiceHeadings, roadmapHeadings, stageContent } from './content';
import { stages } from './stages';

export type DocsSearchItem = {
  label: string;
  href: string;
  type: string;
};

const referencePages: DocsSearchItem[] = [
  { label: 'Roadmap', href: `${site.basePath}/roadmap/`, type: 'Reference' },
  { label: 'Practice companion', href: `${site.basePath}/practice/`, type: 'Reference' },
  { label: 'Resource directory', href: `${site.basePath}/resources/`, type: 'Reference' },
  { label: 'Study skills', href: `${site.basePath}/skills/`, type: 'Reference' },
  { label: 'Prompt library', href: `${site.basePath}/prompt-library/`, type: 'Reference' },
  { label: 'Glossary', href: `${site.basePath}/glossary/`, type: 'Reference' },
];

const documentSections: DocsSearchItem[] = [
  ...roadmapHeadings.filter((heading) => heading.depth <= 2).map((heading) => ({ label: heading.title, href: `${site.basePath}/roadmap/#${heading.slug}`, type: 'Roadmap section' })),
  ...practiceHeadings.filter((heading) => heading.depth <= 2).map((heading) => ({ label: heading.title, href: `${site.basePath}/practice/#${heading.slug}`, type: 'Practice section' })),
];

const stageSections = stages.flatMap((stage) => {
  const content = stageContent(stage.id);
  const route = `${site.basePath}/stage/${stage.slug}/`;
  return [
    { label: stage.title, href: route, type: 'Stage' },
    ...content.roadmapHeadings.filter((heading) => heading.depth <= 2).map((heading) => ({ label: `${stage.title}: ${heading.title}`, href: `${route}#roadmap-${heading.slug}`, type: 'Roadmap section' })),
    ...content.practiceHeadings.filter((heading) => heading.depth <= 2).map((heading) => ({ label: `${stage.title}: ${heading.title}`, href: `${route}#practice-${heading.slug}`, type: 'Practice section' })),
  ];
});

export const docsSearchItems: DocsSearchItem[] = [...referencePages, ...stageSections, ...documentSections];
