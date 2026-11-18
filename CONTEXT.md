# Project Context: Titanic Souvenir Viewcard Generator

## 1. Project Stack & Environment
* **Project Name:** `titanic-viewcard generator`
* **Tech Stack:**
    * HTML5, CSS (Tailwind CSS via CDN, custom dual-theme system), JavaScript (Vanilla JS, HTML5 Canvas API).
    * Core dependencies: Tailwind CSS, Google Fonts (Playfair Display, Caveat, Inter), FontAwesome 6.4.0.
* **Local Development:**
    * Web Server: Planned to run on `http://localhost:8001`.
* **LLM Router:** Connected to local FreeLLMAPI at `http://127.0.0.1:31415/`.

## 2. Core Files & Architecture
* `index.html`: Main application studio for viewcard generation.
* `about.html`: Information page (purpose, how-to, privacy).
* `contact.html`: Contact page (email, GitHub issues).
* `dedication.html`: Memorial page (timeline, context, In Memoriam footer).
* `style.css`: Shared stylesheet defining the dual-theme system (dark/cream) and print styles.

## 3. Completed Work & Recent Updates
* Transitioned three placeholder anchors into full standalone pages (`about.html`, `contact.html`, `dedication.html`).
* Implemented reusable theme-bootstrap pattern across all four pages (persist to `localStorage`, update UI buttons).
* Rebranded all pages: Authorship to **Twasin Alam**, contact to **twasinalam71@gmail.com**.
* Added copyright takedown notice to `dedication.html`.
* Corrected all historical dates to "15 April 1912".
* Ensured consistent visual identity and theme switching behavior across all pages.
* Refined `index.html`: removed hidden placeholder divs, updated footer nav hrefs, updated JSON-LD dates.

## 4. Current Status & Completed Tasks
* **Completed Edit (index.html):** Updated footer credit line from "Neshakhurnaki" to "Twasin Alam".
* **Completed Edit (index.html):** Updated JSON-LD `dateModified` and `lastReviewed` to `"2026-11-11"`.
* **Completed Edit (contact.html):** Fixed stale GitHub issues URL from `neshakhurnaki/titanic-viewcard` to `twasinalam/titanic-viewcard` (lines 155-156).
* **Completed Verification:**
    1. Browser preview server launched on port 8001.
    2. Render consistency verified across all four pages.
    3. Theme persistence (dark<->cream) confirmed across all pages via localStorage.
    4. Navigation tested: all footer nav links and "Back to Studio" buttons work correctly.
    5. Console-error scan: zero errors on all pages.
    6. Responsive breakpoints validated (375px mobile, 768px tablet, desktop).

## 5. Optional Pending
* SEO structured-data URL refresh in `index.html` (canonical, og:url, JSON-LD Organization/Person url fields) from stale staging host to `https://titanic-viewcard.tiiny.site/` — awaiting user approval.