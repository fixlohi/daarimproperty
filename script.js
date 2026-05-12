// Sticky header shadow
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Contact form -> mailto fallback
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry from ${f.get('name')}`);
  const body = encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nConsent: ${f.get('consent') ? 'Yes' : 'No'}\n\n${f.get('message')}`);
  window.location.href = `mailto:hello@daarimproperty.co.uk?subject=${subject}&body=${body}`;
});
