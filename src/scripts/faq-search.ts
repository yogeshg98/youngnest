type SearchRecord = { id: string; question: string; answer: string; keywords: string[]; category: string; url: string };
const input = document.querySelector<HTMLInputElement>('#faq-search-input')!;
const results = document.querySelector<HTMLElement>('#faq-search-results')!;
const searchStatus = document.querySelector<HTMLElement>('#faq-search-status')!;
const index = JSON.parse(document.querySelector<HTMLScriptElement>('#faq-search-index')!.textContent || '[]') as SearchRecord[];
let active = -1; let timer = 0;
const normalise = (value: string) => value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
function score(record: SearchRecord, term: string) {
  const q = normalise(record.question), a = normalise(record.answer), terms = normalise(record.keywords.join(' '));
  if (q.includes(term)) return 300 + (q === term ? 100 : 0) - q.indexOf(term);
  if (terms.includes(term)) return 200 - terms.indexOf(term);
  if (a.includes(term)) return 100 - a.indexOf(term);
  const letters = term.split('').reduce((total, letter) => total + (q.includes(letter) || terms.includes(letter) ? 1 : 0), 0);
  return letters / term.length >= .8 ? letters : 0;
}
function render() {
  const term = normalise(input.value.trim()); active = -1;
  if (term.length < 2) { results.hidden = true; input.setAttribute('aria-expanded', 'false'); searchStatus.textContent = ''; return; }
  const matches = index.map(record => ({ record, score: score(record, term) })).filter(hit => hit.score > 0).sort((a, b) => b.score - a.score).slice(0, 6);
  results.hidden = false; input.setAttribute('aria-expanded', 'true');
  if (!matches.length) { results.innerHTML = '<div class="faq-search-empty"><strong>No answer for that yet.</strong><span>Message us and we’ll help.</span><a href="https://wa.me/4915567784867" target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a></div>'; searchStatus.textContent = 'No answers found.'; return; }
  results.innerHTML = matches.map((hit, i) => `<a id="faq-result-${i}" role="option" aria-selected="false" href="${hit.record.url}"><span class="faq-result-category">${hit.record.category}</span><strong>${hit.record.question}</strong><span>${hit.record.answer}</span></a>`).join('');
  searchStatus.textContent = `${matches.length} ${matches.length === 1 ? 'answer' : 'answers'} found.`;
}
input.addEventListener('input', () => { window.clearTimeout(timer); timer = window.setTimeout(render, 150); });
input.addEventListener('keydown', event => {
  const options = [...results.querySelectorAll<HTMLAnchorElement>('[role=option]')];
  if (event.key === 'Escape') { input.value = ''; render(); return; }
  if (!options.length) return;
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); active = (active + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length; options.forEach((option, i) => option.setAttribute('aria-selected', String(i === active))); options[active].focus(); }
  if (event.key === 'Enter' && active >= 0) options[active].click();
});
results.addEventListener('keydown', event => { if (event.key === 'Escape') { input.focus(); input.value = ''; render(); } });
