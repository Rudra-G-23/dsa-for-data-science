import metadataSource from '../../docs/resources-meta-data.md?raw';

export const site = {
  name: 'DSA / DS',
  title: 'DSA for Data Science',
  description: 'A practical, Python-first path through data structures and algorithms for data science, machine learning, and curious beginners.',
  repository: 'https://github.com/Rudra-G-23/dsa-for-data-science',
  basePath: '/dsa-for-data-science',
};

export const sharedPrompt = metadataSource.match(/### Shared Ask AI prompt[\s\S]*?```text\n([\s\S]*?)```/)?.[1].trim() ?? '';

export const referencePages = [
  {
    href: '/roadmap/',
    label: 'Roadmap',
    eyebrow: 'The full sequence',
    title: 'The complete learning roadmap.',
    description: 'The source roadmap, organized into a readable reference page without losing the original document.',
    tone: 'coral',
  },
  {
    href: '/practice/',
    label: 'Practice companion',
    eyebrow: 'Make it yours',
    title: 'A practice system that stays dependency-safe.',
    description: 'Paper traces, implementation drills, prompts, problem selection, and a printable progress template.',
    tone: 'blue',
  },
  {
    href: '/resources/',
    label: 'Resource directory',
    eyebrow: 'Good inputs',
    title: 'The right resource at the right time.',
    description: 'Free explanations, visualizers, practice sets, references, and the rules for using them without resource roulette.',
    tone: 'yellow',
  },
  {
    href: '/prompt-library/',
    label: 'Prompt Library',
    eyebrow: 'Use AI well',
    title: 'Prompts that keep the thinking yours.',
    description: 'The reusable prompt patterns from the practice companion, ready to copy into the AI tool you choose.',
    tone: 'dark',
  },
  {
    href: '/glossary/',
    label: 'Glossary',
    eyebrow: 'Keep nearby',
    title: 'The words you will keep meeting.',
    description: 'A compact reference for the concepts, patterns, and complexity terms in the path.',
    tone: 'paper',
  },
  {
    href: '/skills/',
    label: 'Study skills',
    eyebrow: 'Reusable instructions',
    title: 'Small skills for better AI practice.',
    description: 'Versioned Markdown packages for explaining, tracing, and coaching without outsourcing the thinking.',
    tone: 'blue',
  },
];
