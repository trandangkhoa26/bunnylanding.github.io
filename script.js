// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.site-nav');
if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll fix for sticky header
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;
    e.preventDefault();
    const y = targetEl.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
    navMenu?.classList.remove('open');
    navToggleButton?.setAttribute('aria-expanded', 'false');
  });
});

// Simple lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const href = item.getAttribute('href');
    const caption = item.getAttribute('data-caption') || '';
    if (!href || !lightbox || !lightboxImg) return;
    lightboxImg.src = href;
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
  });
});

lightboxClose?.addEventListener('click', () => { if (lightbox) lightbox.hidden = true; });
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.hidden = true;
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// OnlyFans link handler
const onlyfansLink = document.getElementById('onlyfans-link');
const memePopup = document.getElementById('meme-popup');
const memeClose = document.querySelector('.meme-close');
const memeOkBtn = document.querySelector('.meme-ok-btn');

onlyfansLink?.addEventListener('click', (e) => {
  e.preventDefault();
  if (memePopup) memePopup.hidden = false;
});

memeClose?.addEventListener('click', () => {
  if (memePopup) memePopup.hidden = true;
});

memeOkBtn?.addEventListener('click', () => {
  if (memePopup) memePopup.hidden = true;
});

memePopup?.addEventListener('click', (e) => {
  if (e.target === memePopup) memePopup.hidden = true;
});




