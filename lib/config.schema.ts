import { z } from 'zod'

// Helper schemas for common validations
const hexColorSchema = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
  message: 'Color must be a valid hex color (e.g., #A6FF00 or #FFF)',
})

const urlSchema = z.string().url({
  message: 'Must be a valid URL',
}).or(z.string().regex(/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, {
  message: 'Must be a valid domain name',
}))

const envVarSchema = z.string().regex(/^env:[A-Z_][A-Z0-9_]*$/, {
  message: 'Environment variable must match format: env:VARIABLE_NAME',
})

const pageNameSchema = z.enum([
  'home',
  'about',
  'blog',
  'essays',
  'contact',
  'tools',
  'pricing',
  'newsletter',
  'community',
  'playbook',
  'press',
])

// Site configuration schema
export const siteConfigSchema = z.object({
  site: z.object({
    name: z.string().min(1, 'Site name is required'),
    domain: urlSchema,
    tagline: z.string().optional(),
    description: z.string().optional(),
  }),

  theme: z.object({
    colors: z.object({
      primary: hexColorSchema,
      accent: hexColorSchema.optional(),
      background: hexColorSchema.optional(),
      text: hexColorSchema.optional(),
    }),
    fonts: z.object({
      heading: z.string().default('Space Grotesk'),
      body: z.string().default('Space Grotesk'),
    }).optional(),
    style: z.object({
      mode: z.enum(['dark', 'light', 'auto']).default('auto'),
      neonGlow: z.boolean().default(false),
      glassMorphism: z.boolean().default(false),
      animations: z.boolean().default(true),
    }).optional(),
  }),

  pages: z.object({
    enabled: z.array(pageNameSchema).default([]),
    disabled: z.array(pageNameSchema).default([]),
    custom: z.array(z.string()).default([]),
  }).optional(),

  features: z.object({
    emailCapture: z.object({
      enabled: z.boolean().default(false),
      provider: z.enum(['convertkit', 'mailchimp', 'custom']).default('convertkit'),
      apiKey: envVarSchema.or(z.string()).optional(),
      formId: z.string().optional(),
    }).optional(),
      payments: z.object({
        enabled: z.boolean().default(false),
        provider: z.enum(['stripe']).default('stripe'),
        apiKey: envVarSchema.or(z.string()).optional(),
        priceIds: z.object({
          builder: z.string().optional(),
          operator: z.string().optional(),
          accelerator_cohort: z.string().optional(),
          accelerator_dfy: z.string().optional(),
          collective: z.string().optional(),
          accelerator: z.string().optional(),
          patron: z.string().optional(),
        }).optional(),
      }).optional(),
    aiChatbot: z.object({
      enabled: z.boolean().default(false),
      provider: z.enum(['anthropic']).default('anthropic'),
      apiKey: envVarSchema.or(z.string()).optional(),
      model: z.string().default('claude-3-5-sonnet-20241022'),
      persona: z.string().optional(),
    }).optional(),
    video: z.object({
      enabled: z.boolean().default(false),
      provider: z.enum(['gemini', 'manual', 'cloudinary']).default('manual'),
      apiKey: envVarSchema.or(z.string()).optional(),
      note: z.string().optional(),
    }).optional(),
  }).optional(),

  content: z.object({
    essays: z.object({
      enabled: z.boolean().default(false),
      path: z.string().default('/essays'),
      defaultContent: z.array(z.unknown()).default([]),
    }).optional(),
    tools: z.object({
      enabled: z.boolean().default(false),
      path: z.string().default('/tools'),
    }).optional(),
    blog: z.object({
      enabled: z.boolean().default(false),
      path: z.string().default('/blog'),
    }).optional(),
  }).optional(),

  seo: z.object({
    defaultTitle: z.string().optional(),
    defaultDescription: z.string().optional(),
    ogImage: z.string().optional(),
    favicon: z.string().default('/favicon.ico'),
  }).optional(),

  deployment: z.object({
    platform: z.enum(['vercel', 'netlify', 'cloudflare']).default('vercel'),
    autoDeploy: z.boolean().default(false),
    previewDeploy: z.boolean().default(true),
  }).optional(),
})

// Export TypeScript type inferred from schema
export type SiteConfig = z.infer<typeof siteConfigSchema>

// Helper function to extract environment variable name from config
export function extractEnvVar(value: string): string | null {
  const match = value.match(/^env:(.+)$/)
  return match ? match[1] : null
}

// Helper function to check if a value is an environment variable reference
export function isEnvVar(value: string): boolean {
  return /^env:[A-Z_][A-Z0-9_]*$/.test(value)
}
