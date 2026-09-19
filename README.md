# DSA for Data Science

A Python-first learning path for data structures and algorithms in data science and machine learning.

## Website

The learning website is an Astro static site for GitHub Pages. It keeps the guided path small and actionable while exposing the complete roadmap, practice companion, resource directory, Prompt Library, glossary, and reusable study skills.

```bash
npm install
npm run dev
npm run build
```

Progress is stored in the browser only. The site can export a human-readable `dsa-progress.json` file and restore it with Merge or Replace. There are no accounts, backend services, or server-side progress records.

The deployed site is configured for `/dsa-for-data-science` on GitHub Pages. The workflow in `.github/workflows/pages.yml` builds `dist` and deploys it on pushes to `main` or manual dispatch.

Website: https://rudra-g-23.github.io/dsa-for-data-science

## Reusable study skills

The [`skills/`](skills/) directory contains provider-neutral Markdown instruction packages:

- `/dsa-explain` explains one topic with an example, invariant, complexity, and questions.
- `/dsa-trace` creates a paper-first state trace before code.
- `/dsa-coach` gives one hint at a time and protects the learner's chance to solve.

Each package has a versioned `SKILL.md` with its purpose, prerequisites, and response contract. Copy or link a package into the skills directory supported by the AI tool you use.

## Source documents

- [Master roadmap](resources/DSA_for_Data_Science_ML_Master_Roadmap.md)
- [Practice companion](resources/DSA_Practice_System_Free_Resources_Dependency_Safe.md)
- [Resource curation notes](docs/resources-meta-data.md)
