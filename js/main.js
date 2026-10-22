/**
 * Glow & Grace Salon - Core Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveLinks();
  initContactForms();
});

// Navigation Sticky & Mobile Menu Toggle
function initNavbar() {
  const header = document.getElementById('mainHeader');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky Glass on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('glass-nav', 'shadow-md');
      header?.classList.remove('bg-transparent');
    } else {
      // Keep subtle glass
      header?.classList.remove('shadow-md');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    mobileToggle.setAttribute('aria-expanded', 'true');
    const icon = mobileToggle.querySelector('svg');
    if (icon) {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
    }
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
    mobileToggle.setAttribute('aria-expanded', 'false');
    const icon = mobileToggle.querySelector('svg');
    if (icon) {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
    }
  }
}

// Active Nav Link Highlighting
function initActiveLinks() {
  const currentPath = window.location.pathname;
  const page = currentPath.split('/').pop() || 'index.html';
  
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (href === './' && page === 'index.html')) {
      link.classList.add('active');
      link.classList.add('text-gold-dark');
      link.classList.add('font-semibold');
    }
  });
}

// Global Toast Notification
function showToast(title, message, type = 'success') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'fixed top-5 right-5 z-[99999] flex flex-col gap-3 max-w-sm pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto transform transition-all duration-300 ease-out translate-y-[-20px] opacity-0 flex items-start gap-3 p-4 rounded-2xl shadow-xl border bg-white ${
    type === 'success' ? 'border-[#D4AF37] text-[#2C2C2C]' : 'border-red-400 text-red-900'
  }`;

  const iconSvg = type === 'success' 
    ? `<div class="w-8 h-8 rounded-full bg-[#FAF5E8] text-[#D4AF37] flex items-center justify-center shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
       </div>`
    : `<div class="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
       </div>`;

  toast.innerHTML = `
    ${iconSvg}
    <div class="flex-1">
      <h4 class="font-semibold text-sm font-serif text-[#2C2C2C]">${title}</h4>
      <p class="text-xs text-stone-600 mt-0.5 leading-relaxed">${message}</p>
    </div>
    <button class="text-stone-400 hover:text-stone-700 ml-1" onclick="this.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-[-20px]', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto remove after 4.5s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-x-full');
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

// Contact form handling (e.g. on contact.html or footer newsletter)
function initContactForms() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('#contactName')?.value.trim();
      const email = contactForm.querySelector('#contactEmail')?.value.trim();
      const phone = contactForm.querySelector('#contactPhone')?.value.trim();
      const message = contactForm.querySelector('#contactMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('Required Information Missing', 'Please fill in your name, email, and message.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Invalid Email', 'Please provide a valid email address.', 'error');
        return;
      }

      // Simulated submit with elegant loader
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Sending Inquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        
        showToast('Message Received', `Thank you, ${name}! Our concierge will reply to ${email} within 2 hours.`);
      }, 1200);
    });
  }

  // Footer Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]')?.value.trim();
      if (!email) return;

      showToast('Exclusive Invitation', 'You are now subscribed to Glow & Grace VIP privileged seasonal offers.');
      newsletterForm.reset();
    });
  }
}
