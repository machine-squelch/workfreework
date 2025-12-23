/**
 * End-to-End tests for Toolkit feature using Playwright
 * 
 * To run these tests:
 * 1. Install Playwright: npm install -D @playwright/test
 * 2. Install browsers: npx playwright install
 * 3. Add to package.json scripts: "test:e2e": "playwright test"
 * 4. Run: npm run test:e2e
 */

import { test, expect } from '@playwright/test'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

test.describe('Toolkit Main Page', () => {
  test('should load toolkit page successfully', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Check page title
    await expect(page).toHaveTitle(/The Automator's Toolkit/)
    
    // Check main heading
    const heading = page.locator('h1')
    await expect(heading).toContainText("The Automator's Toolkit")
  })

  test('should display featured resources', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Check for featured section
    const featuredSection = page.locator('text=Featured Resources')
    await expect(featuredSection).toBeVisible()
    
    // Check that at least one featured resource is displayed
    const featuredCards = page.locator('a[href^="/toolkit/"]').first()
    await expect(featuredCards).toBeVisible()
  })

  test('should display resource cards with correct information', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Find first resource card
    const firstCard = page.locator('a[href^="/toolkit/"]').first()
    
    // Check for category badge
    await expect(firstCard.locator('text=/Scripts|Templates|Guides|Workflows|Integrations/')).toBeVisible()
    
    // Check for rating
    await expect(firstCard.locator('text=/★/')).toBeVisible()
  })
})

test.describe('Toolkit Search and Filters', () => {
  test('should filter resources by search query', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Find search input
    const searchInput = page.locator('input[placeholder*="Search"]')
    await expect(searchInput).toBeVisible()
    
    // Type search query
    await searchInput.fill('python')
    
    // Wait for debounce
    await page.waitForTimeout(500)
    
    // Check results
    const resultsText = page.locator('text=/resource(s)? found/')
    await expect(resultsText).toBeVisible()
  })

  test('should filter resources by category', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Click on Scripts category
    const scriptsButton = page.locator('button:has-text("Scripts")')
    await scriptsButton.click()
    
    // Verify filter is active (button should have different styling)
    await expect(scriptsButton).toHaveClass(/bg-white/)
    
    // Check that results are filtered
    const resultsText = page.locator('text=/resource(s)? found/')
    await expect(resultsText).toBeVisible()
  })

  test('should filter resources by difficulty', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Click on Beginner difficulty
    const beginnerButton = page.locator('button:has-text("Beginner")')
    await beginnerButton.click()
    
    // Verify filter is active
    await expect(beginnerButton).toHaveClass(/bg-white/)
  })

  test('should clear all filters', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Apply some filters
    await page.locator('input[placeholder*="Search"]').fill('automation')
    await page.locator('button:has-text("Scripts")').click()
    
    // Wait for filters to apply
    await page.waitForTimeout(500)
    
    // Click clear filters button
    const clearButton = page.locator('button:has-text("Clear All Filters")')
    await clearButton.click()
    
    // Verify search is cleared
    const searchInput = page.locator('input[placeholder*="Search"]')
    await expect(searchInput).toHaveValue('')
  })

  test('should change sort order', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Find sort dropdown
    const sortSelect = page.locator('select')
    await expect(sortSelect).toBeVisible()
    
    // Change sort order
    await sortSelect.selectOption('popular')
    
    // Verify selection
    await expect(sortSelect).toHaveValue('popular')
  })
})

test.describe('Toolkit Resource Detail Page', () => {
  test('should navigate to resource detail page', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Click on first resource
    const firstResource = page.locator('a[href^="/toolkit/"]').first()
    await firstResource.click()
    
    // Wait for navigation
    await page.waitForURL(/\/toolkit\/[a-z0-9-]+/)
    
    // Check that we're on a detail page
    await expect(page.locator('h1')).toBeVisible()
  })

  test('should display resource details correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Check title
    await expect(page.locator('h1')).toContainText('Python Web Scraping Script')
    
    // Check category badge
    await expect(page.locator('text=Scripts')).toBeVisible()
    
    // Check difficulty badge
    await expect(page.locator('text=/Beginner|Intermediate|Advanced/')).toBeVisible()
    
    // Check rating
    await expect(page.locator('text=/★/')).toBeVisible()
  })

  test('should display download button', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Check for download button
    const downloadButton = page.locator('button:has-text("Download")')
    await expect(downloadButton).toBeVisible()
  })

  test('should display prerequisites section', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Check for prerequisites
    const prerequisitesHeading = page.locator('h3:has-text("Prerequisites")')
    await expect(prerequisitesHeading).toBeVisible()
  })

  test('should display installation steps', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Check for installation section
    const installationHeading = page.locator('h3:has-text("Installation")')
    await expect(installationHeading).toBeVisible()
  })

  test('should display usage examples with code blocks', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Check for usage examples
    const usageHeading = page.locator('h3:has-text("Usage Examples")')
    await expect(usageHeading).toBeVisible()
    
    // Check for code blocks
    const codeBlock = page.locator('pre code').first()
    await expect(codeBlock).toBeVisible()
  })

  test('should display related resources', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    
    // Check for related resources section
    const relatedHeading = page.locator('h3:has-text("Related Resources")')
    await expect(relatedHeading).toBeVisible()
  })

  test('should copy code to clipboard', async ({ page, context }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Grant clipboard permissions
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    
    // Hover over code block to reveal copy button
    const codeBlock = page.locator('pre').first()
    await codeBlock.hover()
    
    // Click copy button
    const copyButton = page.locator('button:has-text("Copy")').first()
    await copyButton.click()
    
    // Verify button text changes to "Copied!"
    await expect(copyButton).toContainText('Copied!')
  })
})

test.describe('Toolkit Breadcrumbs and Navigation', () => {
  test('should display breadcrumbs on detail page', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Check breadcrumbs
    await expect(page.locator('text=Home')).toBeVisible()
    await expect(page.locator('text=Toolkit')).toBeVisible()
  })

  test('should navigate back to toolkit from breadcrumbs', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit/python-web-scraping-script`)
    
    // Click toolkit breadcrumb
    await page.locator('a:has-text("Toolkit")').click()
    
    // Verify we're back on toolkit page
    await expect(page).toHaveURL(`${BASE_URL}/toolkit`)
  })
})

test.describe('Toolkit Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } }) // iPhone SE size

  test('should display correctly on mobile', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Check that main heading is visible
    await expect(page.locator('h1')).toBeVisible()
    
    // Check that filters are accessible
    await expect(page.locator('input[placeholder*="Search"]')).toBeVisible()
  })

  test('should display resource cards in single column on mobile', async ({ page }) => {
    await page.goto(`${BASE_URL}/toolkit`)
    
    // Get first two resource cards
    const cards = page.locator('a[href^="/toolkit/"]')
    const firstCard = cards.nth(0)
    const secondCard = cards.nth(1)
    
    // Get bounding boxes
    const firstBox = await firstCard.boundingBox()
    const secondBox = await secondCard.boundingBox()
    
    // On mobile, cards should stack vertically (same x position)
    if (firstBox && secondBox) {
      expect(Math.abs(firstBox.x - secondBox.x)).toBeLessThan(10)
    }
  })
})
