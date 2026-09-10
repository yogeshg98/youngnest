import { gallery, property } from '../data/home';
import { submitEnquiry, type EnquiryPayload } from './enquiry';

function track(name: string, details: Record<string, string> = {}) {
  // No provider or personal information. Future analytics can subscribe to this event.
  document.dispatchEvent(new CustomEvent('youngnest:interaction', { detail: { name, ...details } }));
}

const header = document.querySelector<HTMLElement>('.site-header')!;
const hero = document.querySelector<HTMLElement>('.hero')!;
const enquiry = document.querySelector<HTMLElement>('#enquire')!;
const sticky = document.querySelector<HTMLElement>('.mobile-sticky')!;
const menu = document.querySelector<HTMLDialogElement>('#mobile-menu')!;
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
let activeTrigger: HTMLElement | null = null;

function openDialog(dialog: HTMLDialogElement, trigger: HTMLElement) {
  activeTrigger = trigger;
  dialog.showModal();
  document.body.classList.add('dialog-open');
  updateSticky();
}

function updateSticky() {
  const heroBottom = hero.getBoundingClientRect().bottom;
  const enquiryBounds = enquiry.getBoundingClientRect();
  const isFormVisible = enquiryBounds.top < window.innerHeight && enquiryBounds.bottom > 0;
  const editing = document.activeElement?.matches('input, textarea, select') ?? false;
  sticky.hidden = heroBottom > header.offsetHeight || isFormVisible || editing || !!document.querySelector('dialog[open]') || window.innerWidth > 760;
  header.classList.toggle('scrolled', window.scrollY > 20);
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => { updateSticky(); ticking = false; });
    ticking = true;
  }
}, { passive: true });
window.addEventListener('resize', updateSticky);
document.addEventListener('focusin', updateSticky);
document.addEventListener('focusout', () => requestAnimationFrame(updateSticky));
updateSticky();

menuToggle.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'true');
  openDialog(menu, menuToggle);
});
document.querySelector('[data-close-menu]')!.addEventListener('click', () => menu.close());
menu.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  activeTrigger = null;
  menu.close();
  requestAnimationFrame(() => {
    const target = document.querySelector<HTMLElement>(link.hash);
    const heading = target?.querySelector<HTMLElement>('h2') ?? target;
    if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
  });
}));
menu.addEventListener('close', () => menuToggle.setAttribute('aria-expanded', 'false'));

document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    activeTrigger?.focus({ preventScroll: true });
    activeTrigger = null;
    updateSticky();
  });
});

document.querySelectorAll<HTMLAnchorElement>('[data-cta]').forEach(link => link.addEventListener('click', () => {
  track('enquiry_cta_click', { source: link.dataset.cta! });
  document.querySelector<HTMLElement>('#enquiry-heading')!.focus({ preventScroll: true });
}));
document.querySelectorAll<HTMLAnchorElement>('[data-contact]').forEach(link => link.addEventListener('click', () => track('contact_click', { method: link.dataset.contact! })));

const galleryDialog = document.querySelector<HTMLDialogElement>('#gallery-dialog')!;
const lightboxImage = document.querySelector<HTMLImageElement>('#lightbox-image')!;
const imageError = document.querySelector<HTMLElement>('.lightbox-image-error')!;
let imageIndex = 0;
function showImage(index: number) {
  imageIndex = (index + gallery.length) % gallery.length;
  const item = gallery[imageIndex];
  lightboxImage.hidden = false;
  imageError.hidden = true;
  lightboxImage.src = `/images/${item.id}-1600.webp`;
  lightboxImage.alt = item.alt;
  document.querySelector('#gallery-dialog-title')!.textContent = item.category;
  document.querySelector('.gallery-counter')!.textContent = `${imageIndex + 1} / ${gallery.length}`;
}
lightboxImage.addEventListener('error', () => { lightboxImage.hidden = true; imageError.hidden = false; });
document.querySelectorAll<HTMLButtonElement>('.gallery-open').forEach(button => button.addEventListener('click', () => {
  showImage(Number(button.dataset.galleryIndex));
  openDialog(galleryDialog, button);
  track('gallery_open', { image: gallery[imageIndex].id });
}));
document.querySelector('[data-close-gallery]')!.addEventListener('click', () => galleryDialog.close());
document.querySelector('[data-gallery-prev]')!.addEventListener('click', () => showImage(imageIndex - 1));
document.querySelector('[data-gallery-next]')!.addEventListener('click', () => showImage(imageIndex + 1));
galleryDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(imageIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(imageIndex + 1); }
});
let touchStart: { x: number; y: number } | null = null;
lightboxImage.addEventListener('touchstart', event => { touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }, { passive: true });
lightboxImage.addEventListener('touchend', event => {
  if (!touchStart) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) showImage(imageIndex + (dx < 0 ? 1 : -1));
  touchStart = null;
}, { passive: true });

const form = document.querySelector<HTMLFormElement>('#enquiry-form')!;
const formResult = document.querySelector<HTMLElement>('#form-result')!;
const errorSummary = document.querySelector<HTMLElement>('.form-error-summary')!;
const submitButton = document.querySelector<HTMLButtonElement>('.form-submit')!;
submitButton.disabled = false;
const requiredFields = ['name', 'email'].map(id => document.getElementById(id) as HTMLInputElement | HTMLSelectElement);
let started = false;
form.addEventListener('input', () => {
  formResult.hidden = true;
  if (!started) { started = true; track('enquiry_form_start'); }
});
form.addEventListener('change', () => { formResult.hidden = true; });

function validateField(field: HTMLInputElement | HTMLSelectElement) {
  let message = '';
  if (!field.value.trim()) message = field.id === 'name' ? 'Please enter your name.' : field.id === 'email' ? 'Please enter your email address.' : 'Please choose your move-in timing.';
  else if (!field.validity.valid) message = field.id === 'email' ? 'Please enter a valid email address.' : 'Please check this value.';
  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  document.getElementById(`${field.id}-error`)!.textContent = message;
  return !message;
}
requiredFields.forEach(field => {
  field.addEventListener('blur', () => { if (field.value || field.hasAttribute('aria-invalid')) validateField(field); });
  field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') validateField(field); });
  field.addEventListener('change', () => { if (field.hasAttribute('aria-invalid')) validateField(field); });
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  formResult.hidden = true;
  const valid = requiredFields.map(validateField).every(Boolean);
  if (!valid) {
    errorSummary.hidden = false;
    errorSummary.textContent = 'Please check the highlighted fields below.';
    requiredFields.find(field => field.getAttribute('aria-invalid') === 'true')?.focus();
    return;
  }
  errorSummary.hidden = true;
  const data = new FormData(form);
  const payload: EnquiryPayload = {
    name: String(data.get('name')).trim(), email: String(data.get('email')).trim(), moveIn: String(data.get('moveIn')),
    stay: String(data.get('stay') || ''), message: String(data.get('message') || '').trim(), language: 'en',
  };
  submitButton.disabled = true;
  form.setAttribute('aria-busy', 'true');
  try {
    const result = await submitEnquiry(payload);
    if (result.status !== 'preview') throw new Error('Live submission UI must be implemented alongside the backend.');
    const timing = (document.getElementById('move-in') as HTMLSelectElement).selectedOptions[0].text;
    const stay = (document.getElementById('stay') as HTMLSelectElement).selectedOptions[0].text;
    const body = `Hello YoungNest,\n\nI’d like to enquire about a room.\n\nName: ${payload.name}\nEmail: ${payload.email}${payload.moveIn ? `\nPreferred move-in: ${timing}` : ''}${payload.stay ? `\nIntended stay: ${stay}` : ''}${payload.message ? `\n\n${payload.message}` : ''}\n\nThank you!`;
    document.querySelector<HTMLAnchorElement>('#email-enquiry')!.href = `mailto:${property.email}?subject=${encodeURIComponent('Room enquiry — YoungNest Ottobrunn')}&body=${encodeURIComponent(body)}`;
    formResult.hidden = false;
    formResult.focus({ preventScroll: true });
    formResult.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
    track('enquiry_preview_complete');
  } catch {
    errorSummary.textContent = 'The preview couldn’t be completed. Your details are still here. Please try again or contact us directly.';
    errorSummary.hidden = false;
    errorSummary.focus();
    track('enquiry_preview_error');
  } finally {
    submitButton.disabled = false;
    form.removeAttribute('aria-busy');
  }
});

document.querySelectorAll<HTMLDetailsElement>('.faq-item').forEach(item => item.addEventListener('toggle', () => {
  if (item.open) track('faq_open', { question: item.querySelector('summary')!.textContent!.trim() });
}));
