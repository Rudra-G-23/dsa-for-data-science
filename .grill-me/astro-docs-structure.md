# Astro Docs-style site structure

## Goal

Restructure the DSA learning site into an Astro Docs-like documentation shell based on the reference image: persistent top header, left navigation, centered reading column, right “On this page” navigation, and responsive mobile navigation.

## Status

Design tree complete. Implementation completed and verified.

## Planned sections

1. Shared shell scope and page taxonomy
2. Left navigation information architecture
3. Main content and right table of contents
4. Header actions and mobile behavior
5. Visual language and acceptance checks

## Settled decisions

- The reference image is the structural direction: docs-style shell with left navigation, main content, and right contents navigation.
- Existing implementation changes and unrelated worktree changes must be preserved until scope is explicit.
- Use the full docs shell on all non-home pages: roadmap, stages, practice, resources, skills, prompts, and glossary.
- Keep the homepage as a visual landing page that links into the docs shell.
- Use left navigation groups Foundations, Core structures, Algorithms, Data science extensions, followed by Reference links.
- Generate the right contents column from the current page, showing h2 and major h3 headings with active scroll highlighting; hide it when there are no meaningful headings.
- Use a functional header search for page titles, stage names, headings, and reference content.
- Keep repository and theme controls functional; omit an unimplemented language selector.
- On mobile, open left navigation from a header menu button and show page contents as an inline accordion above the content.
- Keep both desktop sidebars sticky below the header with independently scrollable navigation regions.
- Use a focused center reading column of roughly 720-780px.
- Add a persistent Reference group with Roadmap, Practice, Resources, Skills, Prompt Library, and Glossary links.
- Expand the active stage to reveal its local Roadmap and Practice section links.
- Implement grouped, keyboard-accessible search results below the header search field with page, stage, and heading results.
- Support light, dark, and system themes, defaulting to system preference and persisting explicit choices.
- Keep the existing DSA / DS branding, colors, illustrations, and copy while adopting the docs information architecture.
- Replace oversized non-home hero sections with compact documentation headers containing section label, title, description, and actions.
- Mobile order: compact header, title/description, On this page accordion, main content, and full navigation in a header-menu drawer.
- Validate desktop, tablet, and mobile widths, keyboard/focus behavior, search, theme contrast, sticky navigation, long headings, code blocks, print, and reduced motion.

## Dependencies

- The page taxonomy determines which pages use the docs shell and what appears in the left navigation.
- Content taxonomy determines whether existing landing pages remain marketing-style or become documentation pages.
- Mobile behavior depends on whether left navigation and right contents are drawers, accordions, or inline sections.

## Unresolved questions

- Left navigation groups, labels, and destinations.
- Right contents behavior and heading depth.
None. Awaiting confirmation to begin implementation.

## Assumptions to validate

- “On here” means the existing DSA site, not a separate Astro documentation project.
- The reference image is a structural reference, not a request to copy Astro branding, colors, or proprietary content.
- Existing learning content remains the source of truth.

## Next section and questions

Implementation completed after confirmation. Production build and diff validation passed.
