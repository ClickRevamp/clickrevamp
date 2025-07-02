# 🎨 UI/UX Design System – ClickRevamp Standard

This project uses a modern, Framer-inspired design system with clean, responsive, accessible components built using TailwindCSS and shadcn/ui.

---

## 🎨 Visual Design Principles

- Use clean sans-serif fonts (e.g. `Inter`, `General Sans`, `Plus Jakarta Sans`)
- Background: white or light grainy with accent gradients
- Use rounded-xl to 2xl corners for cards, buttons, and inputs
- Add soft shadows (`shadow-md`, `shadow-lg`) for elevation
- Use bold hierarchy:
  - `h1`: `text-4xl font-bold`
  - `h2`: `text-3xl font-semibold`
  - `p`: `text-base leading-relaxed text-muted-foreground`
- Layout: `max-w-[1300px] mx-auto px-6`

---

## 🧩 Component Conventions

- Use `shadcn/ui` for:
  - `Button`, `Card`, `Tabs`, `Dialog`, `Tooltip`, `Input`, `Label`, `Toaster`
- Forms:
  - Use `Zod` for validation
  - Toasts via `Sonner` (`<Toaster />`)
  - Submit via Resend + React Email
- Icons: use `lucide-react`
- Animations: use `framer-motion` + `motion.dev`

---

## ✨ Animation Guidelines

Use `motion.div` for smooth UI behavior:
- Section reveal: fade-in or slide-up on scroll
- CTA buttons: subtle hover scale or glow
- Hero sections: staggered fade with delay
- Cards: scale slightly on hover (`whileHover={{ scale: 1.03 }}`)
- Modal/Dialog: scale + fade for open/close transitions

Use `magic-ui`, `preline`, or `animate.css` for bonus visuals:
- Gradient blobs
- Smooth staggered content reveals
- Entry animations on page load
- Viewport-aware fade-ins

---

## 📱 Responsive & Accessibility Rules

- Mobile-first by default
- All components must:
  - Use `aria-*` labels for accessibility
  - Use keyboard navigation (tab, esc, enter)
  - Collapse cleanly on small screens (`flex-col`, `gap-y-8`)
  - Avoid overflow or scroll-breaking layouts

---

## 🧠 Cursor Agent Behavior

- Always start from `shadcn` or UI libraries before custom work
- Animate using `framer-motion` unless performance is a concern
- Use modern layout tools like `grid`, `flex`, `gap`, `minmax`
- Keep spacing consistent using `4 / 8 / 12 / 16` px increments
- Respect the project’s visual identity and reuse base styles

---

## 🚫 Avoid

- Overused blue gradients (use sparingly or with intent)
- Generic system fonts — prefer visual identity fonts
- Unscoped Tailwind classes or inconsistent spacing
- Overly complex animations that distract from CTA focus
