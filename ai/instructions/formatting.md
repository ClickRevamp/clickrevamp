# 🧹 Code Formatting Rules (GOD-Tier)

Follow these formatting rules across all code to ensure clarity, scalability, and AI-friendly structure.

---

## 🔁 Exports & Structure
- Always use **named exports** (no default)
- Group related functions/types into shared files (e.g. `lib/form.ts`, `types/index.ts`)
- Prefer `.tsx` for all React UI components

---

## 🔠 Typing & Syntax
- Never use `any` – prefer `unknown` + `Zod` parsing
- Use `const` over `let` unless reassignment is needed
- Type all function inputs and return values explicitly
- Co-locate types/interfaces with functions if scoped

---

## ✨ Clean Code Practices
- Keep function bodies under **30 lines**
- Use `arrow functions` + **implicit return** when appropriate
- Prefer `map`, `filter`, `reduce` over manual `for` loops
- Use `??` and `?.` over verbose checks

---

## ✅ PascalCase & Naming
- Use **PascalCase** for all component files
- Use **camelCase** for all hooks, utils, and functions
- Avoid vague names like `data`, `info`, `value` — name things by purpose (e.g. `carModel`, `formState`)

---

## 💡 UI Patterns
- Wrap interactive components with `motion.div` when animating
- Use `className="..."` consistently on JSX elements
- Break long JSX props into new lines when it improves readability

---

## 🧠 Bonus LLM-Friendly Patterns
- Avoid chaining more than 3 functions inline
- Comment complex logic with `// Step: Description...`
- Use spacing between logical blocks inside functions
