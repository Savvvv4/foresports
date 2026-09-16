# ForeSports corporate website

Static HTML/CSS/JS site. No build step, no backend required to view it.

## Structure
- `index.html` — Home
- `product.html` — Product / how the model works
- `facilities.html` — For Facilities (active partnership pitch + contact form)
- `coaches.html` — For Coaches (waitlist)
- `golfers.html` — For Golfers (waitlist)
- `about.html` — About
- `contact.html` — General contact (investors, press, other)
- `privacy.html`, `terms.html` — placeholder legal pages, flagged for lawyer review
- `css/styles.css` — all styling, using CSS variables for the color system
- `js/main.js` — mobile nav toggle + placeholder form handling
- `favicon.svg` — simple favicon

## Running it locally
Just open `index.html` in a browser, or serve the folder with any static server, e.g.:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploying
This is a plain static site — it works on Netlify, Vercel, GitHub Pages, or any basic web host. Point your domain (foresports.in) at wherever you deploy it.

## What's a placeholder right now
- **Forms** (facility contact, coach waitlist, golfer waitlist, general contact) don't submit anywhere yet — they show a "coming soon" confirmation message client-side only (see `data-placeholder-form` in `js/main.js`). Wire these up to a real backend (Formspree, a Google Form/Sheet, or your own endpoint) before relying on them to capture real leads.
- **Privacy Policy / Terms** are plain-language placeholders, not reviewed by a lawyer — replace before collecting real user data.
- **Team section** is intentionally left out, per an earlier decision — add an About/Team section once finalized.
- **Contact email** used throughout is `hello@foresports.in` — swap for your real inbox if different.

## Design system
Defined as CSS variables at the top of `css/styles.css`:
- Colors: `--bg`, `--bg-tint`, `--ink`, `--green`, `--deep`, `--peach`, `--black`, etc.
- Fonts: Fraunces (headlines) + Inter (everything else), loaded from Google Fonts.
- The three audience paths (Golfers / Coaches / Facilities) each carry their own accent color throughout the site for quick visual wayfinding.
