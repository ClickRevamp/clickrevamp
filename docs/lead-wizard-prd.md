# ClickRevamp – Lead Wizard PRD

## 🎯 Core Goal
Transform the Hero CTA into a **universal lead wizard** that qualifies prospects and delivers a professional “Website Plan” via email.

## 🧑‍💻 User Experience
- Low-friction, step-by-step wizard (modal desktop / sheet mobile).
- Takes ~60–90s to complete.
- Clean, modern UI aligned with ClickRevamp branding.
- Accessible, keyboard-friendly, WCAG-compliant.

## 💼 Business Value
- Works for both “new website” and “revamp existing” clients.
- Generates structured project briefs automatically.
- Improves lead quality and reduces manual back-and-forth.

---

## 🛠️ Technical Architecture

**Stack Alignment:**
- Next.js (App Router) + Server Actions
- shadcn/ui (Dialog/Sheet) + Framer Motion animations
- Zod validation + react-hook-form for each step
- Zustand/Context for wizard state management
- Resend + React Email for plan delivery
- Fully responsive + WCAG compliance

---

## 🔄 Flow Map

Hero CTA → Open Modal/Sheet →  
1. Path (New Website / Revamp + URL)   
2. Goals (multi-select outcomes)  
3. Scope (pages + features)  
4. Brand & Content (ready / need help)  
5. Timeline & Budget  
6. Contact Info  
7. Review & Summary →  
📧 Email Delivery (Resend + React Email) →  
✅ Success Screen + “Book Call” option  

---

## 🗂️ Implementation Roadmap

### Step 1 — Primary CTA component
- Create `<PrimaryCTA />` with label **“Get My Website Plan”**.
- Wire to wizard state store.
- Place in Hero (lg size) and Navbar (sm size).

### Step 2 — Wizard Shell
- Implement `<LeadWizard />` with shadcn/ui Dialog/Sheet.
- Progress bar + Back/Continue buttons.
- Accessible focus trap + keyboard controls.

### Step 3 — Steps 1–3
- Path, Goals, Scope.
- Zod schemas, RHF forms, validation, persisted state.

### Step 4 — Steps 4–6
- Brand/Content, Timeline/Budget, Contact.
- Validation + consent checkbox.

### Step 5 — Review
- Summary generator with editable sections.
- “Send My Plan” button.

### Step 6 — Server Action + Email
- Resend integration via server action.
- React Email template for clean summary.
- Send to owner + user.
- Success screen with booking link.

### Step 7 — QA & Analytics
- Accessibility checks.
- Analytics events (cta_click_primary, wizard_started, wizard_completed, email_sent_success).
- Final polish (motion, microcopy, responsive tweaks).

---

## 📊 Analytics Events

- `cta_click_primary`
- `wizard_opened`
- `wizard_step_change`
- `wizard_validation_error`
- `wizard_completed`
- `email_sent_success`
- `call_booked`

---

## ✅ Acceptance Criteria
- CTA appears in Hero + Navbar, consistent style.
- Wizard opens and runs through all steps without breaking.
- Data validates correctly, persists, and restores on reopen.
- Email sent to both owner + user with structured summary.
- Success screen displays with optional call link.
- Fully responsive and accessible.
