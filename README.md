# ✨ Glow & Grace Salon — Luxury Beauty & Spa Website

A complete, fully functional, luxurious, and feminine beauty salon & spa website designed for **"Glow & Grace Salon"**, an upscale sanctuary located in **Bandra West, Mumbai**.

---

## 🌸 Aesthetic & Brand Identity

- **Design Philosophy**: High-end European atelier meets modern holistic Indian wellness. Soft, elegant, trustworthy, and bespoke.
- **Curated Color Palette**:
  - **Blush Pink (`#F8C8DC`)**: Gentle, feminine, radiant accents.
  - **Soft Beige (`#F5F0EB` / `#FAF8F5`)**: Creamy, soothing background canvas.
  - **Pure White (`#FFFFFF`)**: Clean, crisp card structures and negative space.
  - **Warm Gold (`#D4AF37` / `#B8860B`)**: Metallic gradients, delicate borders, badges, and accents.
  - **Deep Charcoal (`#2C2C2C`)**: High-contrast, legible luxury typography.
- **Typography**:
  - Headings: **Playfair Display** & **Cormorant Garamond** (Classic luxury serifs)
  - Body: **Plus Jakarta Sans** (Contemporary, crisp sans-serif)

---

## 🏛️ Website Architecture & Pages

| Page | File | Description & Key Features |
|---|---|---|
| **1. Home** | [`index.html`](file:///c:/Users/Lenovo/Documents/spa/index.html) | Full-width luxury hero section, brand tagline *"Where Beauty Meets Grace"*, primary and secondary CTAs, 4 featured service cards with quick booking, philosophy story, interactive auto-rotating testimonials carousel, Instagram artistry strip, location & hours preview, and final CTA banner. |
| **2. Services** | [`services.html`](file:///c:/Users/Lenovo/Documents/spa/services.html) | Comprehensive 16-treatment menu categorized into **Hair Services**, **Skin Services**, **Nail Services**, and **Spa Treatments**. Each card highlights description, duration, and price in **INR (₹)** with **"Book This Service"** buttons that auto-select the ritual on the booking page. |
| **3. Our Team** | [`team.html`](file:///c:/Users/Lenovo/Documents/spa/team.html) | Profiles of 5 master stylists and therapists with professional portraits, credential badges, years of experience, and individual booking actions. |
| **4. Gallery** | [`gallery.html`](file:///c:/Users/Lenovo/Documents/spa/gallery.html) | Filterable portfolio (All, Hair, Skin, Nails, Spa) featuring 16 high-resolution curated photographs and a **real working fullscreen lightbox** with image zoom, captions, counter, and previous/next/escape navigation. |
| **5. Book Appointment** | [`book.html`](file:///c:/Users/Lenovo/Documents/spa/book.html) | Fully functional reservation engine with URL parameter auto-selection (`?service=...`), date picker (restricting past dates), time slots (10 AM – 7 PM), input validation, appointment receipt modal, WhatsApp direct confirmation generator, and `.ics` calendar download. |
| **6. Contact** | [`contact.html`](file:///c:/Users/Lenovo/Documents/spa/contact.html) | Official Mumbai Bandra West location details, opening hours, interactive Bandra Google Maps embed, functional inquiry form with toast alerts, and FAQs accordion. |

---

## 🌟 Global Interactive Features

1. **Floating WhatsApp Button**:
   - Fixed to the bottom-right corner on every page with a pulsating gold ring and bounce animation.
   - Configured with the exact pre-filled message URL:
     ```text
     https://wa.me/919876543210?text=Hello%20Glow%20%26%20Grace%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.
     ```
2. **Sticky Glass Navigation Bar**:
   - Translucent glassmorphism with dynamic shadow on scroll (`backdrop-filter: blur(16px)`).
   - Fully accessible mobile hamburger menu with smooth slide drawer.
   - Automatic active navigation link highlighting across all pages.
3. **Appointment Engine & Receipt Generation**:
   - Validates required fields (Name, Phone, Service, Date, Time Slot).
   - Generates unique reference code (`GG-XXXXX`).
   - Populates interactive confirmation modal with one-click **"Send Confirmation to WhatsApp"** and **"Save to Calendar (.ics)"**.
   - Stores recent bookings locally in `localStorage` for returning clients.
4. **Interactive Lightbox**:
   - Fullscreen dark backdrop blur with keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`).
   - Image counter and descriptive captions.
5. **SEO & Performance Optimization**:
   - Semantic HTML5 structure with single `<h1>` hierarchy per page.
   - Descriptive meta tags, titles, and Open Graph previews.
   - Lazy-loading for all high-resolution images.

---

## 🚀 How to Run & View Locally

You can open the website instantly with zero build steps or software installation:

1. Double-click **`start_website.bat`** (or open [`index.html`](file:///c:/Users/Lenovo/Documents/spa/index.html) in Chrome, Edge, Safari, or Firefox).
2. The entire website is pure, high-performance static HTML/CSS/JS ready for direct deployment to Netlify, Vercel, GitHub Pages, or any web host.
