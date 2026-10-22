/**
 * Glow & Grace Salon - Filterable Gallery & Fullscreen Lightbox
 */

// Master Gallery Data with High Quality Curated Beauty Assets
const galleryItems = [
  {
    id: 1,
    title: 'Signature Champagne Blonde Balayage',
    category: 'hair',
    categoryLabel: 'Hair Styling',
    description: 'Bespoke hand-painted dimension with silk gloss toner.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 2,
    title: '24K Gold Cellular Rejuvenation Facial',
    category: 'skin',
    categoryLabel: 'Skin & Facials',
    description: 'Pure gold leaf infusion promoting instant firmness and radiant glow.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 3,
    title: 'Bespoke Rose Quartz Gel Nail Art',
    category: 'nails',
    categoryLabel: 'Nail Couture',
    description: 'Translucent marble finish adorned with delicate gold leaf foil.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 4,
    title: 'Himalayan Hot Stone & Herbal Spa',
    category: 'spa',
    categoryLabel: 'Spa & Wellness',
    description: 'Deep tension release with basalt river stones and warmed sesame essence.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 5,
    title: 'Royal Indian Bridal Hairdo & Florals',
    category: 'hair',
    categoryLabel: 'Hair Styling',
    description: 'Intricate braided bridal arrangement accented with fragrant fresh jasmine.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 6,
    title: 'Hydra-Infusion Glow Therapy',
    category: 'skin',
    categoryLabel: 'Skin & Facials',
    description: 'Deep sonic vortex cleansing and hyaluronic acid infusion.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f0233324f79?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 7,
    title: 'Chrome French Sculpted Extensions',
    category: 'nails',
    categoryLabel: 'Nail Couture',
    description: 'Flawless almond sculpted acrylics with mirror glazed micro tips.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 8,
    title: 'Aromatherapy Petal Sanctuary Bath',
    category: 'spa',
    categoryLabel: 'Spa & Wellness',
    description: 'Pre-massage botanical soak with rose petals, lavender, and milk proteins.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 9,
    title: 'Glossy Silk Blowout & Rich Brunette Hue',
    category: 'hair',
    categoryLabel: 'Hair Styling',
    description: 'Thermal mirror finish with nourishing argan oil seal.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 10,
    title: 'Cryo-Sculpting Facial & Gua Sha Ritual',
    category: 'skin',
    categoryLabel: 'Skin & Facials',
    description: 'Lymphatic drainage with iced jade rollers and organic botanical serums.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 11,
    title: 'Pastel Lavender & Pearl Embellished Nails',
    category: 'nails',
    categoryLabel: 'Nail Couture',
    description: 'Velvet matte finish with hand-set micro freshwater seed pearls.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 12,
    title: 'Aromatic Swedish Harmony Full Body Ritual',
    category: 'spa',
    categoryLabel: 'Spa & Wellness',
    description: 'Long rhythmic strokes balancing energy and relieving muscle fatigue.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 13,
    title: 'Voluminous Modern Layered Cut',
    category: 'hair',
    categoryLabel: 'Hair Styling',
    description: 'Face-framing butterfly layers designed for effortless natural movement.',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 14,
    title: 'Collagen Peptide Youth Infusion',
    category: 'skin',
    categoryLabel: 'Skin & Facials',
    description: 'Intense micro-needling alternative for cellular elasticity and line smoothing.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 15,
    title: 'Royal Rose Petal Spa Pedicure',
    category: 'nails',
    categoryLabel: 'Nail Couture',
    description: 'Warm milk soak, sea-salt scrub, calloused heels treatment & gel polish.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 16,
    title: 'Bespoke Couple Lavender Oasis Sanctuary',
    category: 'spa',
    categoryLabel: 'Spa & Wellness',
    description: 'Private candlelit suite therapy with floral essential oils and herbal tea.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
  }
];

let currentFilteredList = [...galleryItems];
let activeLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initGalleryGrid();
  initFilterPills();
  initLightbox();
});

function initGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  renderGalleryItems(galleryItems);
}

function renderGalleryItems(items) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  currentFilteredList = items;
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16">
        <p class="text-stone-500 font-serif text-lg">No gallery items found for this category.</p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'group relative rounded-2xl overflow-hidden shadow-md border border-[#D4AF37]/20 bg-white cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl';
    card.dataset.index = index;

    card.innerHTML = `
      <div class="aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span class="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-1">${item.categoryLabel}</span>
        <h3 class="text-white font-serif text-lg font-medium leading-snug">${item.title}</h3>
        <p class="text-stone-300 text-xs mt-1 line-clamp-2">${item.description}</p>
        <div class="mt-3 flex items-center text-xs text-[#F8C8DC] font-medium gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          <span>Click to View Full Size</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightbox(index);
    });

    grid.appendChild(card);
  });
}

function initFilterPills() {
  const pills = document.querySelectorAll('[data-gallery-filter]');
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.galleryFilter;
      if (filter === 'all') {
        renderGalleryItems(galleryItems);
      } else {
        const filtered = galleryItems.filter(item => item.category === filter);
        renderGalleryItems(filtered);
      }
    });
  });
}

function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!overlay) return;

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', prevLightboxImage);
  nextBtn?.addEventListener('click', nextLightboxImage);

  // Click outside image to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxImage();
    if (e.key === 'ArrowLeft') prevLightboxImage();
  });
}

function openLightbox(index) {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay || !currentFilteredList[index]) return;

  activeLightboxIndex = index;
  updateLightboxContent();

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;

  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function nextLightboxImage() {
  if (currentFilteredList.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex + 1) % currentFilteredList.length;
  updateLightboxContent();
}

function prevLightboxImage() {
  if (currentFilteredList.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = currentFilteredList[activeLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightboxImage');
  const title = document.getElementById('lightboxTitle');
  const category = document.getElementById('lightboxCategory');
  const desc = document.getElementById('lightboxDesc');
  const counter = document.getElementById('lightboxCounter');

  if (img) {
    img.src = item.image;
    img.alt = item.title;
  }
  if (title) title.textContent = item.title;
  if (category) category.textContent = item.categoryLabel;
  if (desc) desc.textContent = item.description;
  if (counter) counter.textContent = `${activeLightboxIndex + 1} of ${currentFilteredList.length}`;
}
