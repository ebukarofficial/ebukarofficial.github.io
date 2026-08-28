// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#000';
      links.style.padding = '20px 24px';
      links.style.borderBottom = '1px solid #2A2A2A';
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Project filter pills (works on pages that have .filter-row + .project-card[data-category])
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project-card');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.filter;
      cards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // Lightbox viewer: click any .lightbox-img to open it full-screen,
  // with prev/next navigation cycling through images sharing the same data-group.
  const lightboxImgs = Array.from(document.querySelectorAll('.lightbox-img'));
  if (lightboxImgs.length) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="Close">✕</button>
      <button class="lightbox-prev" aria-label="Previous">‹</button>
      <button class="lightbox-next" aria-label="Next">›</button>
      <div class="lightbox-stage">
        <img src="" alt="">
        <div class="lightbox-caption"></div>
        <div class="lightbox-counter"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const stageImg = overlay.querySelector('.lightbox-stage img');
    const caption = overlay.querySelector('.lightbox-caption');
    const counter = overlay.querySelector('.lightbox-counter');
    const btnClose = overlay.querySelector('.lightbox-close');
    const btnPrev = overlay.querySelector('.lightbox-prev');
    const btnNext = overlay.querySelector('.lightbox-next');

    // group images by data-group (falls back to a single shared group if unset)
    const groups = {};
    lightboxImgs.forEach(img => {
      const g = img.dataset.group || 'default';
      if (!groups[g]) groups[g] = [];
      groups[g].push(img);
    });

    let currentGroup = [];
    let currentIndex = 0;

    function showAt(index) {
      currentIndex = (index + currentGroup.length) % currentGroup.length;
      const img = currentGroup[currentIndex];
      stageImg.src = img.currentSrc || img.src;
      stageImg.alt = img.alt || '';
      caption.textContent = img.alt || '';
      counter.textContent = currentGroup.length > 1 ? `${currentIndex + 1} / ${currentGroup.length}` : '';
      btnPrev.style.display = currentGroup.length > 1 ? 'flex' : 'none';
      btnNext.style.display = currentGroup.length > 1 ? 'flex' : 'none';
    }

    function openLightbox(img) {
      const g = img.dataset.group || 'default';
      currentGroup = groups[g];
      showAt(currentGroup.indexOf(img));
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    lightboxImgs.forEach(img => {
      img.addEventListener('click', () => openLightbox(img));
    });

    btnClose.addEventListener('click', closeLightbox);
    btnPrev.addEventListener('click', () => showAt(currentIndex - 1));
    btnNext.addEventListener('click', () => showAt(currentIndex + 1));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showAt(currentIndex - 1);
      if (e.key === 'ArrowRight') showAt(currentIndex + 1);
    });
  }
});
