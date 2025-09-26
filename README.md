# IELTS Institute — Home Page

A modern, responsive landing page for a fictional IELTS Institute built with Next.js (App Router) and Tailwind (shadcn/ui). The focus is clean UI, accessibility, and mobile‑first design.

## Quick Start (in v0)
- Preview: Open the Preview from the Version Box to interact with the app.
- Publish: Click “Publish” (top‑right) to deploy to Vercel.
- Install: Use the GitHub button (top‑right) or download ZIP to install the code into your project.
  - The project is ready for the shadcn CLI flow if you install it into a fresh Next.js project.

## What’s Included
- Sections: Navbar (text logo + links), Hero (headline, subtext, CTA, banner image), Features (3–4 cards), Testimonials (2–3 reviews), Footer (links/contact).
- Working Buttons: Navigation links scroll to the corresponding sections. Primary CTAs can link to anchors (e.g., `#features`, `#testimonials`, `#contact`) for a “live” demo feel.
- Assets: Uses a text-based logo (“IELTS Institute”). Images can be swapped in `public/` or via placeholder URLs.

## Design Choices
- Colors (3–5 total): 
  - Primary brand: blue (clean, educational, trustworthy)
  - Neutrals: background/foreground grays for balance
  - Accent: warm amber for CTAs/highlights
- Typography (max two families): 
  - Headings: Sans (Geist or project default)
  - Body: Sans (same family, varied weights)
- Layout: Mobile‑first; Flexbox for most layouts; Grid only where necessary.
- Accessibility: Semantic HTML (`header`, `main`, `section`, `footer`), descriptive alt text, accessible contrast, and ARIA attributes where useful.

## Customize
- Logo Text: Update the text logo component (e.g., `components/logo.tsx`) to your institute name (“IELTS Institute” by default).
- Colors: Adjust theme tokens in `app/globals.css` (e.g., primary, accent, background, foreground) to match your brand palette.
- Images: Replace placeholders or add your own images in `public/` and update the `src` paths in components (Hero, Features, Testimonials).
- Links: Ensure navbar links match section IDs (`#hero`, `#features`, `#testimonials`, `#contact`). Add or remove sections as needed.

## Notes
- No backend logic is required; the page is focused on UI/UX quality.
- If you add an Enroll page later, create `app/enroll/page.tsx` and point CTAs to `/enroll`.
