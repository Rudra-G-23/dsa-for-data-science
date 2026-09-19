const stages = [
  ['00', 'Python foundations', 'Objects, references, syntax, and the standard-library toolkit.', 'Build the mental model before the algorithms.', 'CodingBat + Python Tutor'],
  ['01', 'Complexity', 'Big-O, growth rates, trade-offs, and algorithmic thinking.', 'Explain how work changes as input grows.', 'Paper traces + MIT questions'],
  ['02', 'Arrays and lists', 'Arrays, Python lists, NumPy arrays, and memory behavior.', 'Choose the right container for the job.', 'CodingBat + NumPy 100'],
  ['03', 'Strings', 'String operations, comparisons, frequency, and text mechanics.', 'Turn text into a structure you can reason about.', 'CodingBat String-1/2'],
  ['04', 'Hashing', 'Dictionaries, sets, collisions, lookup, and counting patterns.', 'Trade space for fast, clear lookup.', 'Dict/set drills'],
  ['05', 'Problem-solving patterns', 'Prefix sums, two pointers, and sliding windows.', 'Recognize reusable shapes in unfamiliar problems.', 'NeetCode + curated practice'],
  ['06', 'Binary search', 'Search spaces, monotonic conditions, and boundary control.', 'Search an answer, not just an array.', 'LeetCode study plan'],
  ['07', 'Sorting', 'Ordering, stable sorting, merge sort, quicksort, and top-K.', 'Know when ordering reveals the answer.', 'VisuAlgo + direct implementation'],
  ['08', 'Stack, queue, deque', 'LIFO, FIFO, breadth-first work, and Python collections.', 'Model what must happen next.', 'HackerRank + direct problems'],
  ['09', 'Linked lists', 'Nodes, references, insertion, deletion, and traversal.', 'Draw links before changing them.', 'Python Tutor + VisuAlgo'],
  ['10', 'Recursion', 'Call stacks, base cases, divide and conquer.', 'See a smaller version of the same problem.', 'Paper call stacks'],
  ['11', 'Backtracking', 'Choices, constraints, undo, and search trees.', 'Explore possibilities without losing state.', 'Subset and permutation drills'],
  ['12', 'Trees and BSTs', 'Traversal, hierarchy, ordering, and recursive structure.', 'Move through nested data with a rule.', 'VisuAlgo + traversal drills'],
  ['13', 'Heap and priority queue', 'heapq, top-K, scheduling, and ranked work.', 'Keep the most important item accessible.', 'heapq + top-K problems'],
  ['14', 'Graphs', 'BFS, DFS, DAGs, shortest paths, and DSU.', 'Model relationships and movement.', 'VisuAlgo + CSES'],
  ['15', 'Greedy algorithms', 'Local choices, exchange arguments, intervals, and scheduling.', 'Know when the next best choice is safe.', 'Counterexamples + intervals'],
  ['16', 'Dynamic programming', 'Recurrence, memoization, tabulation, and state design.', 'Turn repeated work into a table of decisions.', 'Recurrence paper practice'],
  ['17', 'Tries and string algorithms', 'Prefix trees, KMP, rolling hash, and advanced search.', 'Index language when ordinary lookup is not enough.', 'Selected advanced references'],
  ['18', 'Data science extensions', 'Sparse structures, streaming, top-K, graph ML, and nearest neighbors.', 'Connect DSA mechanics to real data workloads.', 'NumPy + SciPy projects'],
];

const sharedPrompt = `Please open this public DSA study page and explain its topic clearly for a beginner:\n{page_url}\n\nSummarize the main idea, show one small example, explain the key invariant or rule,\nand ask me two questions to check my understanding. Do not give full solutions to\npractice problems unless I explicitly ask.`;
const progressKey = 'dsa-progress-v1';
const dialog = document.querySelector('[data-setup-dialog]');
const stageDialog = document.querySelector('[data-stage-dialog]');
const stageDetail = document.querySelector('[data-stage-detail]');
const toast = document.querySelector('[data-toast]');
let progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
let activeStage = stages[0];

const showToast = (message) => { toast.textContent = message; toast.classList.add('is-visible'); window.clearTimeout(showToast.timeout); showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2600); };
const saveProgress = () => localStorage.setItem(progressKey, JSON.stringify(progress));
const renderProgress = () => { const count = Object.values(progress).filter(Boolean).length; const total = stages.length; document.querySelector('[data-progress-label]').textContent = `${count} / ${total} complete`; document.querySelector('[data-progress-bar]').style.width = `${(count / total) * 100}%`; document.querySelector('[data-progress-copy]').textContent = count ? `${count} stage${count === 1 ? '' : 's'} checked off. Keep your next session small and specific.` : 'Nothing is checked off yet. That is a perfectly good place to begin.'; };

const renderStages = (query = '') => {
  const list = document.querySelector('[data-stage-list]');
  const normalized = query.toLowerCase().trim();
  list.innerHTML = stages.filter((stage) => stage.slice(0, 3).join(' ').toLowerCase().includes(normalized)).map((stage) => { const complete = progress[stage[0]]; return `<button class="full-stage-item ${complete ? 'is-complete' : ''}" data-stage="${stage[0]}"><span class="stage-number-small">${stage[0]}</span><span><strong>${stage[1]}</strong><small>${stage[2]}</small></span><span class="check-stage">${complete ? '✓' : '↗'}</span></button>`; }).join('') || '<p class="section-description">No stage matches that search.</p>';
  list.querySelectorAll('[data-stage]').forEach((button) => button.addEventListener('click', () => openStage(button.dataset.stage)));
};

const openStage = (stageId) => {
  activeStage = stages.find((stage) => stage[0] === stageId) || stages[0];
  const complete = progress[activeStage[0]];
  stageDetail.innerHTML = `<p class="eyebrow">Stage ${activeStage[0]} / 18</p><h2>${activeStage[1]}</h2><p>${activeStage[2]}</p><div class="detail-grid"><div><b>THE AIM</b><small>${activeStage[3]}</small></div><div><b>START HERE</b><small>${activeStage[4]}</small></div></div><button class="button ${complete ? 'button-quiet' : 'button-primary'}" data-complete-stage>${complete ? 'Mark as incomplete' : 'Mark stage complete'} <span>${complete ? '↶' : '✓'}</span></button>`;
  stageDetail.querySelector('[data-complete-stage]').addEventListener('click', () => { progress[activeStage[0]] = !progress[activeStage[0]]; saveProgress(); renderProgress(); renderStages(document.querySelector('[data-stage-search]').value); openStage(activeStage[0]); showToast(progress[activeStage[0]] ? 'Stage marked complete.' : 'Stage moved back to your path.'); });
  stageDialog.showModal();
};

document.querySelector('[data-open-setup]').addEventListener('click', () => dialog.showModal());
document.querySelector('[data-close-setup]').addEventListener('click', () => dialog.close());
document.querySelector('[data-close-stage]').addEventListener('click', () => stageDialog.close());
document.querySelector('[data-stage-search]').addEventListener('input', (event) => renderStages(event.target.value));
document.querySelectorAll('[data-level]').forEach((option) => option.addEventListener('click', () => { const starts = { new: '00', python: '01', dsa: '02', some: '04' }; localStorage.setItem('dsa-starting-point', option.dataset.level); document.querySelector('[data-setup-note]').textContent = `Start with Stage ${starts[option.dataset.level]}: ${stages.find((stage) => stage[0] === starts[option.dataset.level])[1]}.`; }));

document.querySelectorAll('[data-menu-toggle]').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('.tool-menu').forEach((menu) => menu.classList.remove('is-open')); document.getElementById(button.dataset.menuToggle).classList.toggle('is-open'); }));
const currentUrl = () => window.location.href.split('#')[0] + `#stage-${activeStage[0]}`;
const promptText = () => sharedPrompt.replace('{page_url}', currentUrl());
const download = (content, name, type = 'text/plain') => { const blob = new Blob([content], { type }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = name; link.click(); URL.revokeObjectURL(link.href); };

document.querySelectorAll('[data-ai]').forEach((button) => button.addEventListener('click', async () => { const text = promptText(); if (button.dataset.ai === 'copy-markdown' || button.dataset.ai === 'copy-text') { await navigator.clipboard.writeText(text); showToast('Prompt copied with the public page link.'); return; } const destinations = { chatgpt: `https://chatgpt.com/?q=${encodeURIComponent(text)}`, claude: `https://claude.ai/new?q=${encodeURIComponent(text)}`, gemini: `https://gemini.google.com/app?q=${encodeURIComponent(text)}`, grok: `https://grok.com/?q=${encodeURIComponent(text)}` }; await navigator.clipboard.writeText(text); window.open(destinations[button.dataset.ai], '_blank', 'noopener,noreferrer'); showToast('Prompt copied before opening the AI tool.'); }));

document.querySelectorAll('[data-download]').forEach((button) => button.addEventListener('click', () => { const markdown = `# Stage ${activeStage[0]}: ${activeStage[1]}\n\n${activeStage[2]}\n\n## Aim\n${activeStage[3]}\n\n## Start here\n${activeStage[4]}\n\n${promptText()}`; if (button.dataset.download === 'print') { window.print(); return; } download(button.dataset.download === 'markdown' ? markdown : markdown.replaceAll('#', ''), `dsa-stage-${activeStage[0]}.${button.dataset.download === 'markdown' ? 'md' : 'txt'}`); showToast('Download ready.'); }));
document.querySelectorAll('[data-share]').forEach((button) => button.addEventListener('click', async () => { const url = currentUrl(); if (button.dataset.share === 'copy') { await navigator.clipboard.writeText(url); showToast('Study page link copied.'); return; } if (button.dataset.share === 'native' && navigator.share) { await navigator.share({ title: `DSA / DS - ${activeStage[1]}`, url }); return; } if (button.dataset.share === 'linkedin') window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer'); }));

document.querySelector('[data-export]').addEventListener('click', () => download(JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), progress }, null, 2), 'dsa-progress.json', 'application/json'));
document.querySelector('[data-import]').addEventListener('change', (event) => { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.addEventListener('load', () => { try { progress = JSON.parse(reader.result).progress || {}; saveProgress(); renderProgress(); renderStages(); showToast('Progress restored.'); } catch { showToast('That progress file could not be read.'); } }); reader.readAsText(file); });
document.querySelector('[data-reset]').addEventListener('click', () => { progress = {}; saveProgress(); renderProgress(); renderStages(); showToast('Progress reset.'); });

renderStages();
renderProgress();
