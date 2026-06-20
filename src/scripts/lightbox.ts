// Tiny lightbox: clicking any <img> inside an .article-body opens a full-bleed
// overlay with a neutral dark scrim (a lightbox dims the page regardless of
// theme). Closes on Escape or backdrop click.
const overlay = document.createElement('div');
overlay.className =
  'fixed inset-0 z-50 hidden items-center justify-center bg-black/80 p-6 backdrop-blur-sm';
overlay.setAttribute('role', 'dialog');
overlay.setAttribute('aria-modal', 'true');
overlay.setAttribute('aria-label', 'Enlarged artifact');

const img = document.createElement('img');
img.className = 'max-h-full max-w-full rounded-lg shadow-2xl';
img.alt = '';
overlay.appendChild(img);

document.body.appendChild(overlay);

function open(src: string, alt: string) {
  img.src = src;
  img.alt = alt;
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function close() {
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  img.src = '';
  document.body.style.overflow = '';
}

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) close();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') close();
});

for (const el of document.querySelectorAll<HTMLImageElement>('.article-body img')) {
  el.style.cursor = 'zoom-in';
  el.addEventListener('click', () => open(el.src, el.alt));
}
