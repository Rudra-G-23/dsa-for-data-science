# DSA for Data Science Website - Product Decisions

Status: active decision record

This document records product decisions for the GitHub Pages learning website. The roadmap remains the authoritative source for learning content:

- [DSA for Data Science and ML Master Roadmap](DSA_for_Data_Science_ML_Master_Roadmap.md)
- [DSA Practice System and Free Resources](DSA_Practice_System_Free_Resources_Dependency_Safe.md)

## Confirmed decisions

### Audience

- The site is primarily for the repository owner and must also be approachable for complete beginners.
- The experience must explain the learning path clearly without assuming prior DSA knowledge.
- Use simple, welcoming language for beginners of any age while retaining correct technical terms.

### Finding a starting point

- Offer an optional `Find my starting point` setup on the first visit. It is guidance, not a graded quiz or technical assessment.
- Ask learners: whether they have coded before, whether they can read Python, what they are learning now, and how much time they have today.
- Use clear self-selected levels: new to coding, knows Python basics, can code but is new to DSA, and knows some DSA.
- Let learners choose a current focus: understand a topic, practice Python code, practice problem-solving, understand math or complexity, or continue where they stopped.
- Keep the roadmap Python-first. Explain that the underlying concepts transfer to other languages without creating multi-language lessons in the first version.
- Use setup answers only to recommend a first stage, next resource, and session type. Do not change the entire information architecture.
- Save selected level and current stage locally in the browser and provide a reset action.
- Do not add invented child-focused examples to every topic. Keep source-document content intact and make navigation, labels, and setup language easy to understand.

### Product scope

- Build a focused roadmap and learning-navigation website.
- Do not add gamification, quizzes, achievements, social feeds, accounts, or a backend.
- Do not invent substantial learning material beyond the roadmap.
- Present the content already contained in the roadmap clearly and accessibly.

### Hosting

- Deploy as a static site on GitHub Pages.
- Use an automated GitHub Actions deployment after changes reach the deployment branch.
- The frontend must work entirely without a server.

### Content and navigation

- Make the guided learning path the primary experience for beginners.
- Keep a complete-roadmap view available at all times.
- Organize the long roadmap into readable, navigable sections while preserving its full content.
- Keep the resources and external links already present in the roadmap.
- Include the complete practice companion in readable, structured pages and retain a full original-document view.
- On each topic page, show one primary resource, one visual or practice resource, and a link to the full resource directory.

### Progress

- Provide simple progress tracking without a backend.
- Save progress automatically in the browser.
- Provide clear export and restore options so users can keep or move their progress.

### Page actions

- Keep page actions compact and properly aligned. Do not fill pages with a large number of visible buttons.
- Group AI learning actions under an `Ask AI` control.
- Include copy Markdown and copy plain text options inside the `Ask AI` menu, so users can paste accurate source material into their preferred AI tool.
- Include ChatGPT, Claude, Gemini, and Grok as AI destinations.
- When a learner selects an AI destination, share the current public topic-page URL with a short request to summarize and explain the topic for a beginner.
- If the selected AI tool cannot receive a prompt through its URL, copy the same compact prompt and URL before opening that tool. Never claim that text was pasted into a third-party service.
- Use the shared Ask AI prompt in `resources-meta-data.md` for all website Ask AI actions.
- Preserve existing stage-specific prompts in their relevant learning or practice pages and provide a complete Prompt Library page.
- Provide a `Download` menu with Markdown, plain-text, and PDF options.
- Provide a `Share` menu with direct sharing destinations and a copy-link option. The final platform list is still open.

### Discoverability and trust

- Implement static SEO foundations for public discovery.
- Link visibly to the public source repository: `https://github.com/Rudra-G-23/dsa-for-data-science`.
- Make it clear that the site is open source, has no backend, and sends users to their chosen AI or social platform only after they select an action.
- Verify every external resource link before publishing. Replace stale links with official current URLs while preserving the source documents' learning advice.

### Repository learning material

- The site should surface relevant study artifacts already in the repository, such as Python implementations and supporting notes.
- The README should explain how other learners can use the repository's learning material and any future reusable study skills or commands.

### Source documents

- The master roadmap provides the learning sequence, topic content, projects, and core resource stack.
- The practice companion provides dependency-safe practice, free resource guidance, stage-specific exercises, AI prompt libraries, progress templates, and learning-in-public guidance.
- The website must faithfully surface relevant prompts and resource guidance from both documents instead of replacing them with generic, invented content.
- [How Resources Are Curated and How to Study With Them](resources-meta-data.md) explains the collection's purpose, resource types, dependency-safe selection, and study method for website users.

### Practice progress

- Keep website progress simple: learners can mark a stage complete.
- Provide the detailed practice worksheet as a downloadable or printable resource instead of building a browser dashboard for every score and activity.

## Requested capabilities needing detailed design

- Exact share-platform list and social-preview behavior.
- Exact AI handoff behavior, especially how much page context is sent to each provider.
- The definition, format, installation method, and commands for future reusable study skills.

## Open decisions

- Exact page structure and the boundary between a stage page and a reference page.
- Exact contents and format of the progress export and restore file.
- Exact share platforms and social-preview behavior.
- How future reusable study skills should be defined, installed, and invoked.
- Visual direction, font choice, and light/dark behavior.
- Final frontend stack and the exact GitHub Pages workflow configuration.
