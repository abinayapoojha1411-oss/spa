/**
 * Glow & Grace Salon - Testimonials Slider
 */

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialSlider();
});

function initTestimonialSlider() {
  const sliderTrack = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  const dotsContainer = document.getElementById('testimonialDots');

  if (!sliderTrack) return;

  const slides = sliderTrack.children;
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  let currentIndex = 0;
  let autoSlideTimer = null;
  const slideInterval = 5500;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
        i === 0 ? 'bg-[#D4AF37] w-8' : 'bg-stone-300 hover:bg-stone-400'
      }`;
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlidePosition() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.children;
      for (let i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
          dots[i].className = 'w-8 h-3 rounded-full bg-[#D4AF37] transition-all duration-300';
        } else {
          dots[i].className = 'w-3 h-3 rounded-full bg-stone-300 hover:bg-stone-400 transition-all duration-300';
        }
      }
    }
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  // Auto slide
  function startAutoSlide() {
    autoSlideTimer = setInterval(nextSlide, slideInterval);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }

  // Pause on hover
  sliderTrack.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoSlideTimer);
  });
  sliderTrack.parentElement.addEventListener('mouseleave', () => {
    startAutoSlide();
  });

  // Touch Swipe for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  sliderTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetAutoSlide();
    }
  }

  startAutoSlide();
}
