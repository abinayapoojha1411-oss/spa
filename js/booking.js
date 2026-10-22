/**
 * Glow & Grace Salon - Luxury Booking Engine
 */

// Master list of all salon services with pricing & duration
const masterServices = [
  // Hair Services
  { id: 'hair-cut', name: 'Signature Haircut & Blowout Styling', category: 'Hair Services', duration: '60 mins', price: '₹1,800' },
  { id: 'hair-color', name: 'French Balayage & Gloss Color', category: 'Hair Services', duration: '150 mins', price: '₹5,500' },
  { id: 'hair-keratin', name: 'Brazilian Keratin Infusion Therapy', category: 'Hair Services', duration: '180 mins', price: '₹6,800' },
  { id: 'hair-spa', name: 'Botanical Deep Conditioning Hair Spa', category: 'Hair Services', duration: '75 mins', price: '₹2,400' },

  // Skin Services
  { id: 'skin-cleanup', name: 'Hydrating Rose Clean-Up', category: 'Skin Services', duration: '45 mins', price: '₹1,600' },
  { id: 'skin-gold', name: 'Glow & Grace Signature 24K Gold Facial', category: 'Skin Services', duration: '75 mins', price: '₹3,800' },
  { id: 'skin-antiaging', name: 'Cellular Anti-Aging Collagen Therapy', category: 'Skin Services', duration: '90 mins', price: '₹4,500' },
  { id: 'skin-bright', name: 'Diamond Microdermabrasion & Brightening', category: 'Skin Services', duration: '60 mins', price: '₹3,200' },

  // Nail Services
  { id: 'nail-mani', name: 'Royal Rose Petal Manicure', category: 'Nail Services', duration: '45 mins', price: '₹1,200' },
  { id: 'nail-pedi', name: 'Deluxe Aromatherapy Pedicure', category: 'Nail Services', duration: '60 mins', price: '₹1,600' },
  { id: 'nail-gel', name: 'Premium Gel Extensions & Chrome Finish', category: 'Nail Services', duration: '90 mins', price: '₹2,800' },
  { id: 'nail-art', name: 'Bespoke Hand-Painted Bridal Nail Art', category: 'Nail Services', duration: '60 mins', price: '₹2,200' },

  // Spa Treatments
  { id: 'spa-massage', name: 'Swedish Harmony Full Body Massage', category: 'Spa Treatments', duration: '60 mins', price: '₹3,200' },
  { id: 'spa-aroma', name: 'Sensual Jasmine & Lavender Aromatherapy', category: 'Spa Treatments', duration: '75 mins', price: '₹3,800' },
  { id: 'spa-polish', name: 'Himalayan Pink Salt & Rose Body Polish', category: 'Spa Treatments', duration: '60 mins', price: '₹3,400' },
  { id: 'spa-couple', name: 'Ultimate Serenity Couple Spa Ritual', category: 'Spa Treatments', duration: '120 mins', price: '₹6,500' }
];

document.addEventListener('DOMContentLoaded', () => {
  initBookingForm();
  renderRecentBookings();
});

function initBookingForm() {
  const form = document.getElementById('bookingForm');
  const serviceSelect = document.getElementById('bookingService');
  const dateInput = document.getElementById('bookingDate');

  if (!form) return;

  // Set min date to today
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    // Default to tomorrow or today
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Populate services dropdown if empty
  if (serviceSelect && serviceSelect.options.length <= 1) {
    populateServicesDropdown(serviceSelect);
  }

  // Pre-select service from URL parameter (e.g., ?service=Signature+Haircut)
  handleUrlPreselection(serviceSelect);

  // Form submit listener
  form.addEventListener('submit', handleBookingSubmit);
}

function populateServicesDropdown(selectEl) {
  // Group by category
  const categories = ['Hair Services', 'Skin Services', 'Nail Services', 'Spa Treatments'];
  
  categories.forEach(cat => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = cat;

    masterServices.filter(s => s.category === cat).forEach(s => {
      const option = document.createElement('option');
      option.value = s.name;
      option.textContent = `${s.name} (${s.price} • ${s.duration})`;
      option.dataset.price = s.price;
      option.dataset.duration = s.duration;
      optgroup.appendChild(option);
    });

    selectEl.appendChild(optgroup);
  });
}

function handleUrlPreselection(selectEl) {
  if (!selectEl) return;
  const urlParams = new URLSearchParams(window.location.search);
  const serviceQuery = urlParams.get('service');
  
  if (serviceQuery) {
    const decoded = decodeURIComponent(serviceQuery).toLowerCase();
    for (let i = 0; i < selectEl.options.length; i++) {
      const opt = selectEl.options[i];
      if (opt.value && opt.value.toLowerCase().includes(decoded)) {
        selectEl.selectedIndex = i;
        showToast('Service Selected', `We have pre-selected "${opt.value}" for your appointment.`);
        break;
      }
    }
  }
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('bookingName');
  const phoneInput = document.getElementById('bookingPhone');
  const emailInput = document.getElementById('bookingEmail');
  const serviceInput = document.getElementById('bookingService');
  const dateInput = document.getElementById('bookingDate');
  const timeInput = document.getElementById('bookingTime');
  const stylistInput = document.getElementById('bookingStylist');
  const notesInput = document.getElementById('bookingNotes');

  const name = nameInput?.value.trim();
  const phone = phoneInput?.value.trim();
  const email = emailInput?.value.trim() || 'Not Provided';
  const service = serviceInput?.value;
  const date = dateInput?.value;
  const time = timeInput?.value;
  const stylist = stylistInput ? stylistInput.value : 'Any Available Master Stylist';
  const notes = notesInput?.value.trim() || 'No special requests';

  // Validation
  if (!name || name.length < 2) {
    showToast('Validation Error', 'Please enter your full name (minimum 2 characters).', 'error');
    nameInput?.focus();
    return;
  }

  // Phone validation (accepts 10 digits or international formats)
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  if (!phone || phoneClean.length < 10) {
    showToast('Validation Error', 'Please enter a valid phone number (at least 10 digits).', 'error');
    phoneInput?.focus();
    return;
  }

  if (email && email !== 'Not Provided') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Validation Error', 'Please enter a valid email address.', 'error');
      emailInput?.focus();
      return;
    }
  }

  if (!service) {
    showToast('Validation Error', 'Please select a service from the luxury menu.', 'error');
    serviceInput?.focus();
    return;
  }

  if (!date) {
    showToast('Validation Error', 'Please choose your preferred appointment date.', 'error');
    dateInput?.focus();
    return;
  }

  if (!time) {
    showToast('Validation Error', 'Please select a preferred time slot.', 'error');
    timeInput?.focus();
    return;
  }

  // Generate Reference ID
  const bookingRef = 'GG-' + Math.floor(10000 + Math.random() * 90000);
  const matchedService = masterServices.find(s => s.name === service) || { price: '₹1,800', duration: '60 mins' };

  const appointmentData = {
    id: bookingRef,
    name,
    phone,
    email,
    service,
    price: matchedService.price,
    duration: matchedService.duration,
    date,
    time,
    stylist,
    notes,
    createdAt: new Date().toISOString()
  };

  // Submit button animation
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const origBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg> Confirming Reservation...
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = origBtnText;

    // Save to localStorage
    saveAppointment(appointmentData);

    // Show Success Modal
    openBookingSuccessModal(appointmentData);

    // Reset Form
    e.target.reset();
  }, 1000);
}

function saveAppointment(appointment) {
  try {
    const list = JSON.parse(localStorage.getItem('glow_grace_appointments') || '[]');
    list.unshift(appointment);
    localStorage.setItem('glow_grace_appointments', JSON.stringify(list.slice(0, 10)));
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }
}

function openBookingSuccessModal(data) {
  const modal = document.getElementById('bookingSuccessModal');
  if (!modal) {
    // If modal element doesn't exist on page, create dynamically
    createDynamicSuccessModal(data);
    return;
  }

  // Populate modal fields
  document.getElementById('modalRefId').textContent = data.id;
  document.getElementById('modalClientName').textContent = data.name;
  document.getElementById('modalService').textContent = data.service;
  document.getElementById('modalDateTime').textContent = `${formatDate(data.date)} at ${data.time}`;
  document.getElementById('modalPrice').textContent = `${data.price} (${data.duration})`;

  // WhatsApp Send Button link
  const waBtn = document.getElementById('modalWhatsAppBtn');
  if (waBtn) {
    const waText = encodeURIComponent(
      `Hello Glow & Grace Salon, I have confirmed an appointment online!\n\n` +
      `📌 Booking Ref: ${data.id}\n` +
      `👤 Client: ${data.name}\n` +
      `📞 Phone: ${data.phone}\n` +
      `✨ Service: ${data.service}\n` +
      `🗓 Date: ${data.date}\n` +
      `⏰ Time: ${data.time}\n` +
      `💰 Est. Price: ${data.price}\n\n` +
      `Please acknowledge my slot. Thank you!`
    );
    waBtn.href = `https://wa.me/919876543210?text=${waText}`;
  }

  // Calendar Download
  const calBtn = document.getElementById('modalCalendarBtn');
  if (calBtn) {
    calBtn.onclick = () => downloadIcsFile(data);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  renderRecentBookings();
}

function closeBookingModal() {
  const modal = document.getElementById('bookingSuccessModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function formatDate(dateStr) {
  try {
    const parts = dateStr.split('-');
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  } catch (e) {
    return dateStr;
  }
}

// Download .ics Calendar event file
function downloadIcsFile(data) {
  const [yyyy, mm, dd] = data.date.split('-');
  const timeClean = data.time.replace(/[^0-9:]/g, '');
  const [hh, min] = timeClean.split(':');
  let hour = parseInt(hh, 10);
  if (data.time.includes('PM') && hour < 12) hour += 12;
  if (data.time.includes('AM') && hour === 12) hour = 0;

  const startFormatted = `${yyyy}${mm}${dd}T${String(hour).padStart(2, '0')}${min || '00'}00`;
  const endFormatted = `${yyyy}${mm}${dd}T${String(hour + 1).padStart(2, '0')}${min || '00'}00`;

  const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Glow & Grace Salon//Appointment Reservation//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Glow & Grace Salon: ${data.service}
DTSTART:${startFormatted}
DTEND:${endFormatted}
LOCATION:Glow & Grace Salon, 42, Rosewood Avenue, Bandra West, Mumbai - 400050
DESCRIPTION:Appointment for ${data.name}. Ref: ${data.id}. Service: ${data.service}. Contact: +91 98765 43210.
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `Glow_and_Grace_Appointment_${data.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Calendar Saved', 'Appointment .ics file downloaded. Open it to sync with Google or Apple Calendar.');
}

// Render Recent Bookings from LocalStorage (if container exists on page)
function renderRecentBookings() {
  const container = document.getElementById('recentBookingsContainer');
  if (!container) return;

  try {
    const list = JSON.parse(localStorage.getItem('glow_grace_appointments') || '[]');
    if (list.length === 0) {
      container.innerHTML = `
        <div class="text-center py-6 text-stone-400 text-sm">
          No previous appointments found on this device.
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(item => `
      <div class="p-4 rounded-xl border border-[#D4AF37]/30 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 transition-all hover:shadow-md">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF5E8] text-[#B8860B] border border-[#D4AF37]/40">${item.id}</span>
            <span class="text-xs text-stone-500">${formatDate(item.date)} • ${item.time}</span>
          </div>
          <h4 class="font-serif font-semibold text-stone-800 text-base mt-1">${item.service}</h4>
          <p class="text-xs text-stone-500">Reserved for: <strong class="text-stone-700">${item.name}</strong> • ${item.price}</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <a href="https://wa.me/919876543210?text=Hello%20Glow%20%26%20Grace%2C%20inquiring%20about%20my%20booking%20${item.id}" target="_blank" class="text-xs px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors inline-flex items-center gap-1 font-medium">
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    `).join('');
  } catch (e) {
    console.error(e);
  }
}
