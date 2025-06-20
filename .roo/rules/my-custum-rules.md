---
description: 
globs: 
alwaysApply: true
---
---
# 🧠 ClickRevamp – Supercharged Roo Code Project Rules

These rules are auto-injected as **Project Rules** in Roo Code. They define architecture, tech stack, conventions, and agent behaviors for building high-performance, modern UIs for ClickRevamp.com.

---

## 🌍 Project Identity

ClickRevamp is a conversion-focused SaaS-style site offering website redesign services to startups and small businesses.

> **Goals**:
- Build world-class landing pages at scale
- Leverage the full GOD-tier visual + logic stack
- Maintain modular architecture with reusable UI sections
- Optimize output quality with AI-assist workflows

---

## 🧱 Folder Structure Rules

- Use **App Router**: All routes live in `/app`
- Use `/components/agency/` for high-level sections (Hero, Features, Testimonials, Pricing, CTA, etc.)
- Use `/components/ui/` for reusable `shadcn` components
- Use `/lib/` for logic (helpers, animation config, email utils, etc.)
- Use `/types/` for all shared enums/interfaces
- Use `/ai/prompts/` and `/ai/instructions/` for stored AI logic
- Keep layouts within `max-w-[1300px] mx-auto px-6`

---

## ⚙️ Tech Stack Rules

**GOD-TIER STACK (installed)**:
- ✅ `shadcn/ui` – UI component base
- ✅ `TailwindCSS` – layout, spacing, utility-first design
- ✅ `framer-motion` – fluid animations
- ✅ `motion` – utility animation library (extra control)
- ✅ `animate.css` – utility animations for entry effects
- ✅ `lucide-react` – icon system
- ✅ `sonner` – toast notifications
- ✅ `magic-ui` – visual effects (gradients, glows, cards)
- ✅ `preline` – advanced Tailwind components
- ✅ `Resend + React Email` – form delivery
- ✅ `Zod` – validation schema
- ✅ `next-intl` – i18n (LV / RU / EN ready)

> Animate sections with:
- `fadeIn`, `slideIn`, `hoverScale`, or custom `motion.div` sequences
- Use `animate.css` for pre-baked reveal entry
- Use `magic-ui` for hover glows / backgrounds

---

## 🧩 Component Conventions

- Each custom section lives in:
  `/components/agency/SectionName.tsx`
- Forms must:
  - Use `zod` + accessible labels
  - Show status via `sonner`
  - Submit through `Resend`
- Use `loading`, `error`, `success` states on CTAs
- Wrap animations using `motion.div` or utility classes
- Use `aria-*` attributes where needed

---

## 🧪 QA & Visual Guidelines

- Mobile-first and fully responsive
- Use visual spacing units: `4/8/12/16` px scale
- Typography:
  - h1 → `text-4xl font-bold`
  - h2 → `text-3xl font-semibold`
  - p → `text-base text-muted-foreground`
- All icons from `lucide-react`
- Blur/glow effects encouraged (`magic-ui`)
- Avoid blue gradients unless brand-critical
- No unscoped Tailwind or inline styles

---

## 🤖 Agent Behavior

> 🔧 Agent Guidelines (Roo Code AI):
- **Always reuse** existing `shadcn/ui` components if available
- Suggest component/file names with logic
- Reference existing layout or animation files first
- Use motion/framer presets, not raw CSS
- Favor semantic HTML (`section`, `article`, `button`, etc.)
- If unclear on design intent, ask for visual references
- Use `zod`, `sonner`, `motion`, `next-intl` wherever applicable

---

## 📂 Auto-Attach References

If found, inject:
- `/ai/prompts/*.md`
- `/ai/instructions/*.md`
- `/types/*`
- `/components/ui/*`

---

**Rule Type**: `Always`  
**Filename**: `clickrevamp-rules.md`
