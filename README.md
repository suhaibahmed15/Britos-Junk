# Britos Junk — Website

Premium marketing site for Britos Junk, a junk removal company. Built with React 19, Vite, TypeScript, Tailwind CSS, GSAP, React Three Fiber, and React Router.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → /dist
npm run preview   # preview the production build
```

## Structure

- `src/components/layout` — Header, Footer, Layout (Lenis smooth scroll, scroll progress, floating actions)
- `src/components/three` — the "Reclamation Ring" hero scene (React Three Fiber)
- `src/components/ui` — Loader, SEO (react-helmet-async), floating buttons
- `src/sections/home` — all Home page sections (Hero, Services preview, Why Choose Us, Before/After, Gallery, Testimonials, CTA)
- `src/pages` — Home, About, Services, Contact, FaqPrivacyTerms (combined FAQ/Privacy/Terms with anchor nav)
- `src/data` — services, testimonials, and FAQ content (edit these to update copy)
- `src/lib/utils.ts` — business info (phone, email, hours) — **update this with real business details**

## Before launch

1. Swap the placeholder phone number, email, and WhatsApp link in `src/lib/utils.ts` for real ones.
2. Replace the Google Maps embed src in `src/pages/Contact.tsx` with your actual service-area map query.
3. Wire the Contact form's `onSubmit` in `src/pages/Contact.tsx` to a real endpoint (e.g. an API route, Formspree, or serverless function) — it currently simulates a submission.
4. Swap the stylized gallery/before-after tiles for real job photos.
5. Update `SITE_URL` in `src/components/ui/SEO.tsx` to the live domain, and generate `robots.txt` / `sitemap.xml` for `/public`.
6. Replace social links in `Footer.tsx` (`href="#"`) with real profile URLs.

## Notes

- The hero 3D scene is code-split and lazy-loaded so it doesn't block first paint.
- Animations respect `prefers-reduced-motion`.
- All copy is placeholder business content — customize freely in `src/data/*.ts`.
