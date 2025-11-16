import { readFileSync } from 'fs'
import { join } from 'path'
import { siteConfigSchema, type SiteConfig } from './config.schema'

let cachedConfig: SiteConfig | null = null
let configPath: string | null = null

/**
 * Get the path to the site.config.json file
 */
function getConfigPath(): string {
  if (configPath) {
    return configPath
  }

  // Try to find config file in current working directory or project root
  const possiblePaths = [
    join(process.cwd(), 'site.config.json'),
    join(process.cwd(), '..', 'site.config.json'),
    join(__dirname, '..', 'site.config.json'),
  ]

  for (const path of possiblePaths) {
    try {
      // Check if file exists by trying to read it
      readFileSync(path, 'utf-8')
      configPath = path
      return path
    } catch {
      // File doesn't exist, try next path
      continue
    }
  }

  // If no config found, use default path
  configPath = join(process.cwd(), 'site.config.json')
  return configPath
}

/**
 * Load and validate the site configuration
 * @throws {Error} If config file is invalid or missing
 */
export function loadSiteConfig(): SiteConfig {
  // Return cached config if available
  if (cachedConfig) {
    return cachedConfig
  }

  const path = getConfigPath()

  try {
    // Read config file
    const configFile = readFileSync(path, 'utf-8')
    const rawConfig = JSON.parse(configFile)

    // Validate with Zod schema
    const validatedConfig = siteConfigSchema.parse(rawConfig)

    // Cache the validated config
    cachedConfig = validatedConfig

    return validatedConfig
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `Invalid JSON in site.config.json: ${error.message}\n` +
        `File: ${path}`
      )
    }

    if (error instanceof Error && 'issues' in error) {
      // Zod validation error
      const zodError = error as { issues: Array<{ path: string[]; message: string }> }
      const errorMessages = zodError.issues.map(
        (issue) => `  - ${issue.path.join('.')}: ${issue.message}`
      ).join('\n')

      throw new Error(
        `Configuration validation failed in site.config.json:\n${errorMessages}\n` +
        `File: ${path}\n` +
        `See site.config.json.example for a valid configuration template.`
      )
    }

    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(
        `Configuration file not found: ${path}\n` +
        `Please create site.config.json in the project root.\n` +
        `You can copy site.config.json.example as a starting point.`
      )
    }

    throw new Error(
      `Failed to load configuration: ${error instanceof Error ? error.message : String(error)}\n` +
      `File: ${path}`
    )
  }
}

/**
 * Get the site configuration (with caching)
 * This is the main function to use throughout the app
 */
export function getSiteConfig(): SiteConfig {
  return loadSiteConfig()
}

/**
 * Clear the cached config (useful for testing or hot reload)
 */
export function clearConfigCache(): void {
  cachedConfig = null
  configPath = null
}

/**
 * Set a custom config path (useful for testing)
 */
export function setConfigPath(path: string): void {
  configPath = path
  clearConfigCache()
}

/**
 * Validate a config object without loading from file
 * Useful for testing or CLI validation
 */
export function validateConfig(config: unknown): SiteConfig {
  try {
    return siteConfigSchema.parse(config)
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      const zodError = error as { issues: Array<{ path: string[]; message: string }> }
      const errorMessages = zodError.issues.map(
        (issue) => `  - ${issue.path.join('.')}: ${issue.message}`
      ).join('\n')

      throw new Error(
        `Configuration validation failed:\n${errorMessages}`
      )
    }
    throw error
  }
}

/**
 * Helper function to check if a feature is enabled
 */
export function isFeatureEnabled(featureName: keyof NonNullable<SiteConfig['features']>): boolean {
  const config = getSiteConfig()
  const feature = config.features?.[featureName] as { enabled?: boolean } | undefined
  return feature?.enabled ?? false
}

/**
 * Helper function to check if a page is enabled
 */
export function isPageEnabled(pageName: string): boolean {
  const config = getSiteConfig()
  const enabled = config.pages?.enabled ?? []
  const disabled = config.pages?.disabled ?? []
  return enabled.includes(pageName as any) && !disabled.includes(pageName as any)
}

/**
 * Get theme colors from config
 */
export function getThemeColors() {
  const config = getSiteConfig()
  return config.theme.colors
}

