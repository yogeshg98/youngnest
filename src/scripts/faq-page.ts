const openFragment = () => {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const item = id && document.getElementById(id) as HTMLDetailsElement | null;
  if (!item) return;
  item.open = true;
  requestAnimationFrame(() => item.scrollIntoView({ block: 'start' }));
};
window.addEventListener('hashchange', openFragment);
openFragment();
