# System Analysis & Standard Flow
## شركة أكنان لتعقيب المعاملات — Aknan Document Processing Company Website

**Document Type:** Technical Review & System Flow  
**Role:** Senior System Analyst / Technical Reviewer  
**Version:** 1.0  
**Date:** February 4, 2025

---

## 1. Executive Summary

The system is a **static, multi-page corporate website** for Aknan, an Omani company specializing in government document processing and transaction follow-up. It is a **client-side only** application with no backend server, built with vanilla HTML5, CSS3, and JavaScript. The site supports **Arabic (RTL)** and **English (LTR)** and is designed for information delivery, service discovery, and contact capture.

---

## 2. System Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CLIENT (Browser)                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────────────────────────────┐ │
│  │   HTML      │   │   CSS       │   │  JavaScript (main.js)                │ │
│  │   Pages     │──▶│  style.css  │   │  • i18n (AR/EN)                      │ │
│  │  (5 pages)  │   │  (single    │   │  • Scroll animations                 │ │
│  │             │   │   theme)    │   │  • Form handling (client-side only)   │ │
│  └─────────────┘   └─────────────┘   │  • Mobile menu / Header behavior      │ │
│         │                 │         └─────────────────────────────────────┘ │
│         └─────────────────┴─────────────────────────────────────────────────│
│                                    │                                         │
│  ┌────────────────────────────────┴──────────────────────────────────────┐ │
│  │  External: Google Maps (iframe), WhatsApp (wa.me), LocalStorage (lang)   │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                    No backend — form submissions are client-side only
                    (console.log + alert; no persistence)
```

### 2.2 Technology Stack

| Layer        | Technology                          | Notes                                      |
|-------------|--------------------------------------|--------------------------------------------|
| **Markup**  | HTML5                                | Semantic structure, meta/OG tags, RTL     |
| **Styling** | CSS3                                 | Variables, Grid, Flexbox, media queries    |
| **Script**  | Vanilla JavaScript (ES6+)            | No frameworks; single `main.js`            |
| **i18n**    | Custom (data-translate + JSON-like)  | AR/EN; preference in LocalStorage          |
| **Deploy**  | GitHub Actions → GitHub Pages        | Static publish on push to `main`           |

### 2.3 Directory Structure & File Roles

| Path | Role |
|------|------|
| `index.html` | Landing; hero, intro, why-us, services highlight, client logos |
| `about.html` | Company intro, vision, mission, values |
| `services.html` | Full list of 8 services; “Request Service” → contact with pre-select |
| `team.html` | Team grid (members, roles, placeholders) |
| `contact.html` | Contact form, map iframe, contact info; accepts `?service=` |
| `css/style.css` | Global theme, layout, components, RTL/LTR, responsive |
| `js/main.js` | i18n, mobile menu, scroll animations, form, WhatsApp, service pre-select |
| `images/` | Asset folder (currently placeholders) |
| `.github/workflows/deploy.yml` | CI: push to `main` → publish to `gh-pages` |

---

## 3. Standard User Flows

### 3.1 Flow 1: First-Time Visitor (Discovery → Contact)

```
[User lands] → index.html
      │
      ├─▶ Reads hero + intro + why choose us + services
      │
      ├─▶ CTA: "خدماتنا" / "Our Services" → services.html
      │        │
      │        └─▶ Clicks "طلب الخدمة" on a service
      │                  │
      │                  └─▶ contact.html?service=<encoded name>
      │                            │
      │                            └─▶ Form: service pre-selected via initServicePreSelect()
      │
      └─▶ CTA: "اتصل بنا" / "Contact Us" → contact.html
                  │
                  └─▶ Fills form → Submit → alert (no server; data only in console)
```

### 3.2 Flow 2: Language Toggle (AR ↔ EN)

```
User clicks "EN" or "AR" (lang-toggle)
      │
      ▼
toggleLanguage() in main.js
      │
      ├─▶ currentLang = ar ↔ en
      ├─▶ localStorage.setItem('lang', currentLang)
      ├─▶ document.documentElement: dir (rtl/ltr), lang (ar/en)
      └─▶ translatePage() → querySelectorAll('[data-translate]') → textContent from translations
```

### 3.3 Flow 3: Mobile Navigation

```
Viewport ≤ 768px
      │
      ▼
.mobile-menu-btn visible; .nav-links off-canvas (right: -100%)
      │
      ▼
User clicks ☰ → toggleMobileMenu() → .nav-links.classList.toggle('active')
      │
      ▼
.nav-links.active → right: 0 (slide-in). Click outside or link → close (DOM click listener).
```

### 3.4 Flow 4: Service Request from Services Page

```
User on services.html
      │
      ▼
Clicks "طلب الخدمة" on e.g. "خدمات البلدية"
      │
      ▼
handleServiceRequest('خدمات البلدية')
      │
      ▼
window.location.href = 'contact.html?service=' + encodeURIComponent('خدمات البلدية')
      │
      ▼
contact.html loads → initServicePreSelect() reads URLSearchParams → sets #serviceType value
```

### 3.5 Flow 5: WhatsApp Quick Contact

```
User clicks .whatsapp-float (any page)
      │
      ▼
initWhatsAppButton() click handler (or direct href)
      │
      ▼
Opens: https://wa.me/96812345678?text=<encoded default message (AR/EN)>
```

---

## 4. Data Flow

### 4.1 Data Stored

| Data | Location | Purpose |
|------|----------|--------|
| Language preference | `localStorage['lang']` | Persist AR/EN across pages and sessions |

### 4.2 Data Not Persisted (Current Behavior)

- **Contact form:** On submit, `FormData` is converted to a plain object and sent only to `console.log`; user sees an alert. No server, no database, no email gateway.
- **Service pre-selection:** Passed via URL query only (`contact.html?service=...`).

### 4.3 External Data / Integrations

- **Google Maps:** Embedded via iframe (static URL; coordinates in HTML are placeholder).
- **WhatsApp:** Link to `wa.me` with fixed number and optional pre-filled message.

---

## 5. Page-by-Page Flow Summary

| Page | Purpose | Inbound Links | Outbound / CTAs |
|------|--------|----------------|------------------|
| **index** | Landing, trust, service teasers | Entry, footer, nav | services, contact, nav |
| **about** | Vision, mission, values | Nav, footer | Nav only |
| **services** | 8 service cards | Nav, index CTAs, footer | contact (with ?service=), nav |
| **team** | Team grid | Nav | Nav only |
| **contact** | Form + map + info | Nav, services “طلب الخدمة”, index, footer, WhatsApp | Form submit (client-side), WhatsApp |

---

## 6. JavaScript Initialization Flow (DOMContentLoaded)

Execution order in `main.js`:

1. **initLanguage()** — Set `dir`/`lang` from `localStorage` or default `ar`; run `translatePage()`.
2. **initScrollAnimations()** — IntersectionObserver on `.fade-in` → add `.visible`.
3. **initSmoothScroll()** — Anchor links `href^="#"` smooth-scroll to target.
4. **initHeaderScroll()** — Scroll listener to adjust header box-shadow.
5. **initContactForm()** — Submit handler on `#contactForm`: preventDefault, log data, alert, reset.
6. **initWhatsAppButton()** — Click on `.whatsapp-float` → open WhatsApp with pre-filled text.
7. **initServicePreSelect()** — Read `?service=` and set `#serviceType` value.
8. **Global click listener** — Close mobile menu when clicking outside nav and menu button.

Functions exposed globally for HTML: `toggleLanguage`, `toggleMobileMenu`, `handleServiceRequest`.

---

## 7. Deployment Flow

```
Developer push to branch "main"
      │
      ▼
GitHub Actions: workflow "Deploy Aknan Website" (.github/workflows/deploy.yml)
      │
      ├─▶ Checkout repository
      └─▶ peaceiris/actions-gh-pages@v3
            │
            ├─▶ publish_dir: ./
            ├─▶ publish_branch: gh-pages
            └─▶ github_token: GITHUB_TOKEN
      │
      ▼
Site served from GitHub Pages (root = repository root).
```

---

## 8. Technical Review: Strengths

- **Clear separation:** One CSS file, one JS file, consistent structure across HTML pages.
- **RTL/LTR:** Handled via `dir`/`lang` and CSS (`html[dir="ltr"]`), with translation keys.
- **SEO & social:** Meta description, keywords, Open Graph, Twitter cards on key pages.
- **Accessibility:** Semantic HTML, `aria-label` on WhatsApp; form labels and structure present.
- **Responsive:** Breakpoints at 768px and 480px; mobile menu and stacked layouts.
- **No build step:** Easy to host anywhere; deploys as static files.
- **CI/CD:** Automated deploy to GitHub Pages on push to `main`.

---

## 9. Technical Review: Gaps & Recommendations

| Area | Current State | Recommendation |
|------|----------------|----------------|
| **Contact form** | Client-side only; no persistence | Add serverless function (e.g. Formspree, Netlify Forms) or backend API to send email/store leads. |
| **Service request** | URL param only; form not sent to server | Same as above; ensure `service` is included in submitted payload. |
| **WhatsApp number** | Hardcoded in HTML and JS | Centralize in one place (e.g. config in `main.js` or data attribute) and replace placeholder with real number. |
| **Google Maps** | Placeholder coordinates in iframe | Replace with real location embed and, if needed, API key for advanced use. |
| **Images** | Placeholders (emoji / .gitkeep) | Add real logo, OG image, team photos; use responsive images (`srcset`) where relevant. |
| **i18n** | Manual keys; no fallback for missing keys | Consider fallback to default language if key missing; optional: extract strings to JSON for translators. |
| **Form validation** | HTML5 `required` only | Add explicit validation and user-friendly error messages (e.g. phone format, email). |
| **Analytics** | None observed | Add analytics (e.g. GA4) and optional cookie consent for compliance. |
| **Security** | N/A (static site) | When adding form backend: use HTTPS, validate/sanitize input, rate limiting. |

---

## 10. Standard Flow Diagram (Simplified)

```
                    ┌──────────────┐
                    │   Visitor    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ index.html   │
                    │  (Landing)   │
                    └──────┬───────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │ about.html   │  │services.html  │  │ contact.html │
  │ (Company)    │  │ (8 services)  │  │ (Form+Map)   │
  └──────────────┘  └──────┬───────┘  └──────▲───────┘
         │                 │                 │
         │                 │ "طلب الخدمة"    │
         │                 └─────────────────┘
         │
         ▼
  ┌──────────────┐
  │  team.html   │
  │  (Team)      │
  └──────────────┘

  Shared on every page: Header (nav + lang toggle), Footer, WhatsApp float.
  All pages: same css/style.css, same js/main.js.
```

---

## 11. Conclusion

The system is a **static, brochure-style website** with clear information architecture and consistent navigation. **Standard flows** are: land on homepage → explore services/about/team → contact (with optional service pre-selected from services page); language and mobile menu behave in a predictable way. The main functional gap is **contact/service request handling**, which is client-side only; adding a small backend or serverless form endpoint would complete the intended “request service” flow and align the system with business needs.

---

*End of System Analysis & Standard Flow Document.*
