# ⚙️ Backend & API Logic – Form Handling & DB Rules

All backend logic must follow this flow using **Next.js App Router**, **Zod**, and **Resend** for form delivery. Use **Drizzle ORM** for DB access.

---

## ✅ Form Submission Flow

- All forms must:
  - Be validated with `Zod`
  - Live inside `/lib/actions/` or API routes under `app/api/`
  - Use `async/await` + `try/catch`

- On submit:
  - Parse + validate input with `Zod`
  - Trigger email via `Resend`
  - Return a success JSON: `{ success: true }`
  - Show feedback via `toast.success()`

- Handle failures:
  - Return: `{ error: 'Reason' }`
  - Display via `toast.error()` in UI

---

## 🗃 Database Rules

- Use `Drizzle ORM` for all SQL logic
- Store DB queries inside:
  - `lib/db/` → direct queries
  - `lib/queries/` → grouped logic handlers
- Always wrap queries with error handling and validate inputs

---

## 💡 Example Pattern

```ts
import { z } from 'zod'
import { sendEmail } from '@/lib/email'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function submitForm(req: Request) {
  try {
    const data = await req.json()
    const parsed = schema.parse(data)

    await sendEmail(parsed)

    return Response.json({ success: true })
  } catch (e) {
    return Response.json({ error: 'Invalid input' }, { status: 400 })
  }
}
