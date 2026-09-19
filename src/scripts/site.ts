const stagePage = document.querySelector<HTMLElement>('[data-stage-page]');
const progressKey = 'dsa-progress-v1';
const stageIds = Array.from({ length: 19 }, (_, index) => String(index).padStart(2, '0'));

type ProgressState = {
  schemaVersion: number;
  exportedAt: string;
  selectedLevel: string;
  currentStage: string;
  completedStages: string[];
  lastUpdatedAt: string;
};

const now = () => new Date().toISOString();
const defaultState = (): ProgressState => ({ schemaVersion: 1, exportedAt: now(), selectedLevel: '', currentStage: '00', completedStages: [], lastUpdatedAt: now() });
const normalize = (value: unknown): ProgressState => {
  const raw = (value && typeof value === 'object' ? value : {}) as Partial<ProgressState> & { progress?: Record<string, boolean> };
  const completedStages = Array.isArray(raw.completedStages)
    ? raw.completedStages.filter((id): id is string => typeof id === 'string' && stageIds.includes(id))
    : Object.entries(raw.progress ?? {}).filter(([, complete]) => complete).map(([id]) => id).filter((id) => stageIds.includes(id));
  return {
    schemaVersion: 1,
    exportedAt: typeof raw.exportedAt === 'string' ? raw.exportedAt : now(),
    selectedLevel: typeof raw.selectedLevel === 'string' ? raw.selectedLevel : '',
    currentStage: typeof raw.currentStage === 'string' && stageIds.includes(raw.currentStage) ? raw.currentStage : '00',
    completedStages: [...new Set(completedStages)],
    lastUpdatedAt: typeof raw.lastUpdatedAt === 'string' ? raw.lastUpdatedAt : now(),
  };
};

let state = normalize(JSON.parse(localStorage.getItem(progressKey) || '{}'));
const persist = () => {
  state.lastUpdatedAt = now();
  localStorage.setItem(progressKey, JSON.stringify(state));
  renderProgress();
};
const isComplete = (id: string) => state.completedStages.includes(id);
const toggleStage = (id: string) => {
  state.completedStages = isComplete(id) ? state.completedStages.filter((item) => item !== id) : [...state.completedStages, id];
  state.currentStage = id;
  persist();
  updateStageButton(id);
  updateCurrentCard();
  toast(isComplete(id) ? 'Stage marked complete.' : 'Stage moved back to your path.');
};
const updateStageButton = (id: string) => {
  const button = document.querySelector<HTMLElement>(`[data-stage-complete][data-stage-id="${id}"]`);
  if (!button) return;
  const label = button.querySelector('[data-complete-label]');
  if (label) label.textContent = isComplete(id) ? 'Mark stage incomplete' : 'Mark stage complete';
  button.classList.toggle('is-complete', isComplete(id));
};

const renderProgress = () => {
  const count = state.completedStages.length;
  document.querySelectorAll<HTMLElement>('[data-progress-label]').forEach((item) => { item.textContent = `${count} / ${stageIds.length} complete`; });
  document.querySelectorAll<HTMLElement>('[data-progress-bar]').forEach((item) => { item.style.width = `${(count / stageIds.length) * 100}%`; });
  document.querySelectorAll<HTMLElement>('[data-progress-copy]').forEach((item) => { item.textContent = count ? `${count} stage${count === 1 ? '' : 's'} checked off. Keep your next session small and specific.` : 'Nothing is checked off yet. That is a perfectly good place to begin.'; });
  stageIds.forEach((id) => document.querySelector(`[data-stage-id="${id}"]`)?.classList.toggle('is-complete', isComplete(id)));
};

const updateCurrentCard = () => {
  const card = document.querySelector<HTMLElement>('[data-current-card]');
  if (!card) return;
  const item = document.querySelector<HTMLElement>(`[data-stage-id="${state.currentStage}"][data-stage-title]`);
  if (!item) return;
  const title = item.dataset.stageTitle || '';
  const description = item.dataset.stageDescription || '';
  const id = state.currentStage;
  const number = card.querySelector('[data-current-number]');
  const eyebrow = card.querySelector('[data-current-eyebrow]');
  const titleNode = card.querySelector('[data-current-title]');
  const descriptionNode = card.querySelector('[data-current-description]');
  const link = card.querySelector<HTMLAnchorElement>('[data-current-link]');
  const status = card.querySelector('[data-current-status]');
  if (number) number.textContent = id;
  if (eyebrow) eyebrow.textContent = title;
  if (titleNode) titleNode.textContent = isComplete(id) ? 'Choose another stage, or revisit this one.' : description;
  if (descriptionNode) descriptionNode.textContent = isComplete(id) ? 'Your progress is saved locally. Keep going when you are ready.' : 'Open the stage page for the primary resource, practice action, and completion check.';
  if (link) link.href = `/dsa-for-data-science/stage/${item.dataset.stageSlug}/`;
  if (status) status.textContent = `STAGE ${id} / ${stageIds.length}`;
  const currentProgress = card.querySelector<HTMLElement>('[data-current-progress]');
  if (currentProgress) currentProgress.style.width = `${(state.completedStages.length / stageIds.length) * 100}%`;
};

const toast = (message: string) => {
  let element = document.querySelector<HTMLElement>('[data-toast]');
  if (!element) {
    element = document.createElement('div');
    element.className = 'toast';
    element.dataset.toast = '';
    element.setAttribute('role', 'status');
    document.body.append(element);
  }
  element.textContent = message;
  element.classList.add('is-visible');
  window.clearTimeout(Number(element.dataset.timeout));
  element.dataset.timeout = String(window.setTimeout(() => element?.classList.remove('is-visible'), 2800));
};

const copyText = async (value: string) => {
  if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
  else {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
};

const download = (content: string, name: string, type = 'text/plain') => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([content], { type }));
  link.download = name;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};

const currentUrl = () => window.location.href.split('#')[0];
const sharedPrompt = document.body.dataset.sharedPrompt || '';
const getToolContext = (element: HTMLElement) => ({ title: element.dataset.stageTitle || document.title, url: element.dataset.pageUrl ? `${window.location.origin}${element.dataset.pageUrl}` : currentUrl() });

document.querySelectorAll<HTMLElement>('[data-stage-card]').forEach((card) => {
  card.dataset.stageTitle = card.dataset.stageTitle || card.querySelector('strong')?.textContent || '';
  card.dataset.stageDescription = card.dataset.stageDescription || card.querySelector('small')?.textContent || '';
  card.dataset.stageSlug = card.getAttribute('href')?.split('/').pop() || '';
});
document.querySelectorAll<HTMLElement>('[data-stage-complete]').forEach((button) => button.addEventListener('click', () => toggleStage(button.dataset.stageId || '00')));
document.querySelector('[data-stage-search]')?.addEventListener('input', (event) => {
  const query = (event.target as HTMLInputElement).value.trim().toLowerCase();
  document.querySelectorAll<HTMLElement>('.full-stage-list [data-stage-card]').forEach((card) => { card.hidden = !`${card.dataset.stageTitle} ${card.dataset.stageDescription}`.toLowerCase().includes(query); });
});

document.querySelector('[data-open-setup]')?.addEventListener('click', () => document.querySelector<HTMLDialogElement>('[data-setup-dialog]')?.showModal());
document.querySelector('[data-close-setup]')?.addEventListener('click', () => document.querySelector<HTMLDialogElement>('[data-setup-dialog]')?.close());
const levelMap: Record<string, { stage: string; note: string }> = {
  new: { stage: '00', note: 'Start with Python foundations. Take one small trace, then stop while it still feels clear.' },
  python: { stage: '01', note: 'Start with complexity. You already have enough Python to begin asking how ideas scale.' },
  dsa: { stage: '02', note: 'Start with arrays and lists. They are the clearest bridge into data-structure thinking.' },
  some: { stage: '05', note: 'Start with problem-solving patterns. Use the earlier stages as references when a dependency appears.' },
};
document.querySelectorAll<HTMLButtonElement>('[data-level]').forEach((button) => button.addEventListener('click', () => {
  const answer = levelMap[button.dataset.level || 'new'];
  state.selectedLevel = button.dataset.level || 'new';
  state.currentStage = answer.stage;
  persist();
  const note = document.querySelector('[data-setup-note]');
  if (note) note.textContent = answer.note;
  updateCurrentCard();
  window.setTimeout(() => document.querySelector<HTMLDialogElement>('[data-setup-dialog]')?.close(), 1800);
}));

document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((button) => button.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('dsa-theme', theme);
  button.setAttribute('aria-label', `Use ${theme === 'dark' ? 'light' : 'dark'} mode`);
}));

document.querySelectorAll<HTMLElement>('[data-page-tools]').forEach((tools) => {
  tools.querySelectorAll<HTMLButtonElement>('[data-ai]').forEach((button) => button.addEventListener('click', async () => {
    const context = getToolContext(tools);
    const prompt = sharedPrompt.replace('{page_url}', context.url);
    await copyText(prompt);
    const destinations: Record<string, string> = { chatgpt: `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`, claude: `https://claude.ai/new?q=${encodeURIComponent(prompt)}`, gemini: `https://gemini.google.com/app?q=${encodeURIComponent(prompt)}`, grok: `https://grok.com/?q=${encodeURIComponent(prompt)}` };
    if (button.dataset.ai === 'copy-markdown') { await copyText(`## ${context.title}\n\n${prompt}`); toast('Markdown prompt copied.'); return; }
    if (button.dataset.ai === 'copy-text') { toast('Plain-text prompt copied.'); return; }
    window.open(destinations[button.dataset.ai || 'chatgpt'], '_blank', 'noopener,noreferrer');
    toast('Prompt copied before opening the AI tool.');
  }));
  tools.querySelectorAll<HTMLButtonElement>('[data-download]').forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.download === 'print') { window.print(); return; }
    const context = getToolContext(tools);
    const content = `# ${context.title}\n\nPublic page: ${context.url}\n\n${sharedPrompt.replace('{page_url}', context.url)}`;
    download(button.dataset.download === 'markdown' ? content : content.replaceAll('#', ''), `dsa-${context.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${button.dataset.download === 'markdown' ? 'md' : 'txt'}`);
    toast('Download ready.');
  }));
  tools.querySelectorAll<HTMLButtonElement>('[data-share]').forEach((button) => button.addEventListener('click', async () => {
    const context = getToolContext(tools);
    if (button.dataset.share === 'copy') { await copyText(context.url); toast('Study page link copied.'); return; }
    if (button.dataset.share === 'native') {
      if (navigator.share) await navigator.share({ title: context.title, url: context.url });
      else { await copyText(context.url); toast('Native sharing is unavailable, so the link was copied.'); }
      return;
    }
    const shareUrls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(context.url)}`,
      x: `https://x.com/intent/post?url=${encodeURIComponent(context.url)}&text=${encodeURIComponent(context.title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(context.url)}`,
      reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(context.url)}&title=${encodeURIComponent(context.title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${context.title} ${context.url}`)}`,
    };
    window.open(shareUrls[button.dataset.share || 'linkedin'], '_blank', 'noopener,noreferrer');
  }));
});

document.querySelector('[data-export]')?.addEventListener('click', () => {
  const exported = { ...state, exportedAt: now() };
  download(JSON.stringify(exported, null, 2), 'dsa-progress.json', 'application/json');
  toast('Progress export ready.');
});
document.querySelector('[data-import]')?.addEventListener('change', (event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    try {
      const imported = normalize(JSON.parse(String(reader.result)));
      const choice = window.prompt('Restore progress: type merge or replace.', 'merge')?.trim().toLowerCase();
      if (choice !== 'merge' && choice !== 'replace') { toast('Restore cancelled.'); return; }
      if (!window.confirm(`Confirm ${choice}: this changes your local progress.`)) { toast('Restore cancelled.'); return; }
      if (choice === 'replace') state = imported;
      else {
        const importedIsNewer = Date.parse(imported.lastUpdatedAt) > Date.parse(state.lastUpdatedAt);
        state = { ...state, selectedLevel: importedIsNewer ? imported.selectedLevel : state.selectedLevel, currentStage: importedIsNewer ? imported.currentStage : state.currentStage, completedStages: [...new Set([...state.completedStages, ...imported.completedStages])], lastUpdatedAt: now() };
      }
      persist();
      updateCurrentCard();
      toast(`Progress ${choice}d.`);
    } catch { toast('That progress file could not be read.'); }
  });
  reader.readAsText(file);
});
document.querySelector('[data-reset]')?.addEventListener('click', () => {
  if (!window.confirm('Reset all local progress?')) return;
  state = defaultState();
  persist();
  updateCurrentCard();
  toast('Progress reset.');
});
document.querySelector('[data-copy-shared]')?.addEventListener('click', async () => { await copyText(sharedPrompt.replace('{page_url}', currentUrl())); toast('Shared prompt copied.'); });
document.querySelectorAll<HTMLButtonElement>('[data-copy-prompt]').forEach((button) => button.addEventListener('click', async () => { await copyText(button.dataset.copyPrompt || ''); toast('Prompt copied.'); }));

renderProgress();
updateCurrentCard();
if (stagePage) updateStageButton(stagePage.dataset.stageId || '00');
