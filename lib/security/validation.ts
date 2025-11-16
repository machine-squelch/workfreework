import { z } from 'zod'
import { sanitizeString, sanitizeEmail, sanitizeURL } from './sanitize'

/**
 * 2026 Best-in-Class Input Validation
 * Comprehensive validation schemas with sanitization
 */

// Common validation patterns
export const patterns = {
  userId: /^[a-zA-Z0-9_-]{1,64}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9-]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  base64Image: /^data:image\/(jpeg|jpg|png|gif|webp);base64,/,
}

// Zod schemas with sanitization
export const schemas = {
  userId: z.string()
    .min(1)
    .max(64)
    .regex(patterns.userId, 'Invalid user ID format')
    .transform((val) => sanitizeString(val, 64)),

  email: z.string()
    .email('Invalid email format')
    .max(255)
    .transform((val) => sanitizeEmail(val) || val),

  url: z.string()
    .url('Invalid URL format')
    .max(2048)
    .transform((val) => sanitizeURL(val) || val),

  slug: z.string()
    .min(1)
    .max(200)
    .regex(patterns.slug, 'Invalid slug format')
    .transform((val) => sanitizeString(val.toLowerCase(), 200)),

  nonEmptyString: z.string()
    .min(1)
    .max(10000)
    .transform((val) => sanitizeString(val, 10000)),

  safeHTML: z.string()
    .max(100000)
    .transform((val) => sanitizeString(val, 100000)),

  positiveNumber: z.number()
    .positive('Must be a positive number')
    .finite('Must be a finite number'),

  nonNegativeNumber: z.number()
    .nonnegative('Must be a non-negative number')
    .finite('Must be a finite number'),

  timestamp: z.number()
    .int('Must be an integer')
    .positive('Must be positive')
    .finite('Must be finite'),
}

// Request validation helper
export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: z.ZodError } {
  const result = schema.safeParse(data)
  
  if (result.success) {
    return { success: true, data: result.data }
  }
  
  return { success: false, errors: result.error }
}

// Validate and sanitize user input
export function validateAndSanitize<T>(
  schema: z.ZodSchema<T>,
  input: unknown
): T {
  const result = schema.safeParse(input)
  
  if (!result.success) {
    throw new Error(`Validation failed: ${result.error.errors.map(e => e.message).join(', ')}`)
  }
  
  return result.data
}

