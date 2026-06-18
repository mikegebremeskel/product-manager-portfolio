// Minimal scroll-reveal: add .is-visible when any .reveal enters the viewport.
// Respects prefers-reduced-motion via CSS (see global.css).
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
);

for (const el of document.querySelectorAll('.reveal')) {
  io.observe(el);
}
