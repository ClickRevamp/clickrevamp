# 🧱 Project Structure Rules

This project uses the **Next.js App Router** with modular, scalable folders optimized for design clarity, dev speed, and component reuse.

---

## 🗂️ Folder Conventions

- `/app` – route-based pages (App Router)
- `/components/ui` – `shadcn/ui` components (Button, Dialog, Toast, etc.)
- `/components/agency` – page sections (Hero, Features, Pricing, Testimonials, etc.)
- `/components/global` – layout/global use components (Header, Footer, Container)
- `/lib` – utilities, helpers, logic (e.g. `lib/sendEmail.ts`, `lib/submitForm.ts`)
- `/types` – TypeScript interfaces, enums, shared models
- `/ai/instructions/` – markdown-based Cursor rules (like this file)
- `/ai/prompts/` – prompt templates for repeating dev workflows
- `/public/images/` – assets for visuals, logos, and illustrations

---

## 📦 Component Structure

Each section component (e.g. `Hero.tsx`) must:

- Use semantic tags (e.g. `<section>`, `<header>`)
- Accept props and remain reusable
- Use `max-w-[1300px] mx-auto px-6` layout
- Use motion where relevant (`framer-motion` or `motion`)
- Use clean Tailwind classes — avoid unscoped styles

---

## 🧠 Smart Agent Behavior

Cursor should:

- Split complex logic into utilities inside `/lib`
- Favor modular components over monoliths
- Detect reusable patterns and suggest centralizing them
- Avoid repetition across files (e.g. CTA buttons, inputs)
- Default to clean, scalable layout patterns using Tailwind

---

## 🚫 Avoid

- Monolithic components with hardcoded logic
- Deep prop drilling — use clean local props or lifting
- Unscoped Tailwind or inconsistent layout structure
- Mixing UI logic with backend (always split to `/lib`)
