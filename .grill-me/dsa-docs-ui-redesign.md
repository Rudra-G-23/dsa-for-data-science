# DSA docs UI redesign

## Goal

Clarify and then implement the requested documentation UI improvements: copy controls for AI prompts, a foundations/stages sidebar with complete-sequence navigation, heading back-to-contents controls, mobile contents placement, and PDF color preservation.

## Status

Design tree complete. Implementation completed and verified.

## Planned sections

1. Navigation model and information architecture
2. Prompt-copy behavior and feedback
3. Responsive behavior and accessibility
4. PDF/export requirements and acceptance checks
5. Shared understanding and implementation scope

## Settled decisions

- Preserve existing uncommitted work and inspect the current Astro implementation before changing it.
- Use the existing site terminology and content model unless the user chooses otherwise.
- Add a shared navigation sidebar for roadmap and stage pages.
- The sidebar lists the complete foundation/stage sequence, highlights the current stage, and uses a compact mobile control.
- Selecting a stage navigates directly to its page and expands that stage's section links after navigation.
- Add a visible contents list to long content pages, move it to the top on mobile, and add accessible back-to-contents arrows to h2 and h3 headings.
- Add a copy control to every visible AI prompt, including shared prompts, prompt cards, Ask AI menu prompts, and prompts rendered in roadmap/practice content.
- Copy controls copy the exact prompt text and provide temporary confirmation feedback.
- On mobile, use a compact Complete sequence accordion near the top, followed by the page contents list.
- Target browser print/save-to-PDF, preserving colors with print CSS and `print-color-adjust: exact`.
- Validate desktop and mobile behavior, copying, keyboard/accessibility, visual PDF output, and production checks.
- Place the complete-sequence sidebar on the left on desktop; keep resource links secondary on the right.
- Group the 19-stage sequence into Foundations, Core structures, Algorithms, and Data science extensions without changing stage numbering.
- Highlight the current stage and current content heading as the user scrolls, with restrained color/weight changes.
- Use groups Foundations 00-04, Core structures 05-13, Algorithms 14-17, and Data science extensions 18.
- Change a copied prompt button to `Copied` for about two seconds, preserve focus, announce success accessibly, and show a manual-copy fallback on failure.
- Preserve colored cards, sidebar backgrounds, pills, borders, and accent text in print output while hiding interactive controls and navigation chrome.

## Dependencies

- Navigation details depend on whether the sidebar is global, stage-specific, or both.
- Mobile layout details depend on the chosen contents/sidebar relationship.
- PDF details depend on whether export is browser print CSS or a generated PDF pipeline.

## Unresolved questions

None. Awaiting confirmation to begin implementation.

## Assumptions to validate

- "all foundations and stages" refers to the learning roadmap hierarchy already present in the site.
- "all AI prompts" refers to prompt cards/blocks rendered by the prompt library and stage pages.
- "PDF" refers to browser print/export unless the project contains a separate generator.

## Next section and questions

Implementation completed after confirmation. Build verification passed.
