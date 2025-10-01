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


// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Gallery popup functionality
const galleryPopup = document.getElementById('gallery-popup');
const galleryClose = document.querySelector('.gallery-close');
const galleryPopupImages = document.getElementById('gallery-popup-images');

// Gallery data - replace with your actual Google Drive image IDs
const galleryData = {
  1: [
    'YOUR_IMAGE_1_1_ID',
    'YOUR_IMAGE_1_2_ID', 
    'YOUR_IMAGE_1_3_ID',
    'YOUR_IMAGE_1_4_ID',
    'YOUR_IMAGE_1_5_ID'
  ],
  2: [
    'YOUR_IMAGE_2_1_ID',
    'YOUR_IMAGE_2_2_ID',
    'YOUR_IMAGE_2_3_ID', 
    'YOUR_IMAGE_2_4_ID',
    'YOUR_IMAGE_2_5_ID'
  ],
  3: [
    'YOUR_IMAGE_3_1_ID',
    'YOUR_IMAGE_3_2_ID',
    'YOUR_IMAGE_3_3_ID',
    'YOUR_IMAGE_3_4_ID', 
    'YOUR_IMAGE_3_5_ID'
  ],
  4: [
    'YOUR_IMAGE_4_1_ID',
    'YOUR_IMAGE_4_2_ID',
    'YOUR_IMAGE_4_3_ID',
    'YOUR_IMAGE_4_4_ID',
    'YOUR_IMAGE_4_5_ID'
  ],
  5: [
    'YOUR_IMAGE_5_1_ID',
    'YOUR_IMAGE_5_2_ID',
    'YOUR_IMAGE_5_3_ID',
    'YOUR_IMAGE_5_4_ID',
    'YOUR_IMAGE_5_5_ID'
  ],
  6: [
    'YOUR_IMAGE_6_1_ID',
    'YOUR_IMAGE_6_2_ID',
    'YOUR_IMAGE_6_3_ID',
    'YOUR_IMAGE_6_4_ID',
    'YOUR_IMAGE_6_5_ID'
  ]
};

// Gallery item click handler
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const galleryId = item.getAttribute('data-gallery');
    const images = galleryData[galleryId];
    
    if (!images || !galleryPopup || !galleryPopupImages) return;
    
    // Clear previous images
    galleryPopupImages.innerHTML = '';
    
    // Add new images
    images.forEach((imageId, index) => {
      const img = document.createElement('img');
      img.src = `https://drive.google.com/uc?export=view&id=${imageId}`;
      img.alt = `BUNNY Gallery ${galleryId} - Image ${index + 1}`;
      img.loading = 'lazy';
      galleryPopupImages.appendChild(img);
    });
    
    galleryPopup.hidden = false;
  });
});

// Close gallery popup
galleryClose?.addEventListener('click', () => {
  if (galleryPopup) galleryPopup.hidden = true;
});

galleryPopup?.addEventListener('click', (e) => {
  if (e.target === galleryPopup) galleryPopup.hidden = true;
});

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




