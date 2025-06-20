## ⚙️ TaskMaster AI Instructions

Use TaskMaster AI to break down major goals into structured, complexity-rated subtasks.
This allows Cursor agents to generate more accurate, sequenced completions.

### Guidelines:
- Use `task-master parse-prd` or MCP PRD flow for structured task creation
- Each task should define:
  - Scope
  - Complexity
  - Dependencies
  - Prompt instruction

### Apply this for:
- Multistep UI animations
- Backend workflows with multiple form states
- API + DB logic + UI coordination
- Anything you'd previously "fumble" through with vague prompts

### When NOT to use:
- 1-liner copy tweaks or minor styling changes (Cursor agent is faster)

### Tips:
- Use `task-master next` to get the next best task
- Re-sync with our GOD-stack rules (shadcn/ui, framer-motion, zod, resend) during task generation
- All tasks must align with `.mdc` rules and visual identity

✅ Syncs with: `structure.md`, `backend.md`, `ui.md`, `my-custom-rules.mdc`
