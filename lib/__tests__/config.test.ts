/**
 * Test file for config system
 * Run with: npm run test (once Vitest is set up)
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { validateConfig, extractEnvVar, isEnvVar } from '../config.schema'
import { setConfigPath, clearConfigCache } from '../config'

// Mock config for testing
const validConfig = {
  site: {
    name: 'Test Site',
    domain: 'testsite.com',
    tagline: 'Test Tagline',
    description: 'Test Description',
  },
  theme: {
    colors: {
      primary: '#A6FF00',
      accent: '#FF3B3F',
      background: '#F5F5F0',
      text: '#000000',
    },
    fonts: {
      heading: 'Space Grotesk',
      body: 'Space Grotesk',
    },
    style: {
      mode: 'dark' as const,
      neonGlow: true,
      glassMorphism: true,
      animations: true,
    },
  },
  pages: {
    enabled: ['home', 'about'],
    disabled: [],
    custom: [],
  },
  features: {
    emailCapture: {
      enabled: true,
      provider: 'convertkit' as const,
      apiKey: 'env:CONVERTKIT_API_KEY',
    },
  },
  seo: {
    defaultTitle: 'Test Site',
    defaultDescription: 'Test Description',
    favicon: '/favicon.ico',
  },
}

describe('Config Schema Validation', () => {
  it('should validate a correct config', () => {
    expect(() => validateConfig(validConfig)).not.toThrow()
    const result = validateConfig(validConfig)
    expect(result.site.name).toBe('Test Site')
  })

  it('should reject invalid hex colors', () => {
    const invalidConfig = {
      ...validConfig,
      theme: {
        ...validConfig.theme,
        colors: {
          ...validConfig.theme.colors,
          primary: 'not-a-color',
        },
      },
    }

    expect(() => validateConfig(invalidConfig)).toThrow()
  })

  it('should reject invalid page names', () => {
    const invalidConfig = {
      ...validConfig,
      pages: {
        enabled: ['invalid-page-name'],
        disabled: [],
        custom: [],
      },
    }

    expect(() => validateConfig(invalidConfig)).toThrow()
  })

  it('should validate environment variable syntax', () => {
    expect(isEnvVar('env:VALID_VAR_NAME')).toBe(true)
    expect(isEnvVar('env:INVALID-VAR')).toBe(false)
    expect(isEnvVar('not-an-env-var')).toBe(false)
    expect(isEnvVar('env:123INVALID')).toBe(false)
  })

  it('should extract environment variable name', () => {
    expect(extractEnvVar('env:CONVERTKIT_API_KEY')).toBe('CONVERTKIT_API_KEY')
    expect(extractEnvVar('not-an-env-var')).toBeNull()
  })

  it('should handle optional fields', () => {
    const minimalConfig = {
      site: {
        name: 'Minimal Site',
        domain: 'minimal.com',
      },
      theme: {
        colors: {
          primary: '#FFFFFF',
        },
      },
    }

    expect(() => validateConfig(minimalConfig)).not.toThrow()
    const result = validateConfig(minimalConfig)
    expect(result.theme.style?.mode).toBe('auto') // Default value
  })
})

describe('Config Helpers', () => {
  beforeEach(() => {
    clearConfigCache()
  })

  // These tests would require actual config file loading
  // They'll be expanded once we set up proper test fixtures
})

