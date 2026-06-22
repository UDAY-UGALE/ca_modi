# A I Modi & Co — Website

A premium, fintech-grade website for the Chartered Accountancy firm **A I Modi & Co**, Pune.

Built with **React + Vite + Tailwind CSS + Framer Motion + GSAP + Lenis**.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Where to edit things

| What | File |
| --- | --- |
| All copy, services, stats, testimonials, address, emails | `src/lib/content.js` |
| Brand colours, fonts, shadows | `tailwind.config.js` |
| Global styles, grain, grid, animations | `src/index.css` |
| The hero dashboard ("Financial Console") | `src/components/FinancialConsole.jsx` |
| Page assembly / section order | `src/App.jsx` |

## Before you go live

- Set a real phone number in `src/lib/content.js` (`phoneDisplay` + `phoneE164`) to activate the Call + WhatsApp buttons.
- The contact form currently opens a pre-filled email. Wire `submit()` in `src/components/Contact.jsx` to your backend or a form service (Formspree, Resend, etc.) when ready.
