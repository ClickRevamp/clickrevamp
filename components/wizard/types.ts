import { z } from "zod";

// Helper function to normalize URL
const normalizeUrl = (url: string | undefined): string => {
  const trimmed = (url ?? "").trim();
  if (!trimmed) return "";
  
  // Auto-prepend https:// if missing protocol
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  
  return trimmed;
};

// Step 1: Path selection and site URL
export const Step1Schema = z.object({
  path: z.enum(["new", "revamp"], {
    required_error: "Please select a path"
  }),
  siteUrl: z
    .string()
    .transform(normalizeUrl)
    .optional()
}).superRefine((data, ctx) => {
  // Only validate URL if path is "revamp"
  if (data.path === "revamp") {
    // Check if URL is provided
    if (!data.siteUrl || data.siteUrl.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please add your site URL",
        path: ["siteUrl"]
      });
      return;
    }
    
    // Check if URL is valid format
    if (!/^https?:\/\/.+\..+/.test(data.siteUrl)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid URL (e.g., https://example.com)",
        path: ["siteUrl"]
      });
    }
  }
});

// Step 2: Goals selection
export const Step2Schema = z.object({
  goals: z.array(z.enum([
    "leads",
    "conversions", 
    "seo",
    "speed",
    "multilingual",
    "payments",
    "cms"
  ])).min(1, "Pick at least one goal")
});

// Step 3: Scope - pages and features
export const Step3Schema = z.object({
  pages: z.enum(["1-3", "4-7", "8+"], {
    required_error: "Please select page count"
  }),
  features: z.array(z.enum([
    "hero",
    "pricing", 
    "testimonials",
    "blog",
    "forms",
    "calendar",
    "chat",
    "crm",
    "email_automations"
  ])).default([])
});

// Combined wizard data type
export type WizardData = z.infer<typeof Step1Schema> & 
                        z.infer<typeof Step2Schema> & 
                        z.infer<typeof Step3Schema>;

// Individual step types for convenience
export type Step1Data = z.infer<typeof Step1Schema>;
export type Step2Data = z.infer<typeof Step2Schema>;
export type Step3Data = z.infer<typeof Step3Schema>;

// Goal options with display labels
export const goalOptions = [
  { value: "leads", label: "Generate Leads/Bookings" },
  { value: "conversions", label: "Increase Conversions" },
  { value: "seo", label: "Improve SEO Rankings" },
  { value: "speed", label: "Boost Site Speed" },
  { value: "multilingual", label: "Add Multiple Languages" },
  { value: "payments", label: "Accept Payments" },
  { value: "cms", label: "Content Management System" }
] as const;

// Feature options with display labels
export const featureOptions = [
  { value: "hero", label: "Hero Section" },
  { value: "pricing", label: "Pricing Tables" },
  { value: "testimonials", label: "Testimonials" },
  { value: "blog", label: "Blog/News" },
  { value: "forms", label: "Contact Forms" },
  { value: "calendar", label: "Booking Calendar" },
  { value: "chat", label: "Live Chat" },
  { value: "crm", label: "CRM Integration" },
  { value: "email_automations", label: "Email Automations" }
] as const;

// Page count options
export const pageOptions = [
  { value: "1-3", label: "1-3 pages", description: "Simple site or landing page" },
  { value: "4-7", label: "4-7 pages", description: "Small business site" },
  { value: "8+", label: "8+ pages", description: "Large site or complex needs" }
] as const;
