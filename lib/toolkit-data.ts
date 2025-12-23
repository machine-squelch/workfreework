import { ToolkitResource } from './toolkit.schema'

/**
 * Initial toolkit resources
 * In production, this would be stored in a database
 */
export const toolkitResources: ToolkitResource[] = [
  {
    id: '1',
    slug: 'python-web-scraping-script',
    title: 'Python Web Scraping Script',
    description: 'A robust Python script for scraping product data from e-commerce websites with rate limiting and error handling.',
    fullDescription: `This comprehensive web scraping script uses BeautifulSoup and Requests to extract product information from e-commerce sites. It includes built-in rate limiting to avoid getting blocked, error handling for network issues, and data export to CSV/JSON formats.

Perfect for price monitoring, competitor analysis, or building product databases without manual data entry.`,
    category: 'Scripts',
    difficulty: 'Intermediate',
    tags: ['python', 'web-scraping', 'beautifulsoup', 'automation', 'data-extraction'],
    downloadUrl: 'https://github.com/workfreework/toolkit/releases/download/v1.0/python-scraper.zip',
    githubUrl: 'https://github.com/workfreework/python-web-scraper',
    author: {
      name: 'WorkFreeWork Team',
      url: 'https://workfreework.com',
    },
    dateAdded: '2025-01-15T00:00:00Z',
    downloads: 342,
    rating: 4.7,
    ratingCount: 23,
    prerequisites: [
      'Python 3.8 or higher installed',
      'Basic understanding of HTML structure',
      'Familiarity with command line',
    ],
    dependencies: [
      'beautifulsoup4==4.12.0',
      'requests==2.31.0',
      'pandas==2.1.0',
      'python-dotenv==1.0.0',
    ],
    installationSteps: [
      'Download and extract the ZIP file',
      'Navigate to the project directory: cd python-web-scraper',
      'Create a virtual environment: python -m venv venv',
      'Activate the virtual environment: source venv/bin/activate (Linux/Mac) or venv\\Scripts\\activate (Windows)',
      'Install dependencies: pip install -r requirements.txt',
      'Copy .env.example to .env and configure your settings',
    ],
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `from scraper import ProductScraper

# Initialize the scraper
scraper = ProductScraper(
    base_url='https://example.com/products',
    rate_limit=2  # 2 seconds between requests
)

# Scrape products
products = scraper.scrape_products(max_pages=5)

# Export to CSV
scraper.export_to_csv(products, 'products.csv')`,
        language: 'python',
      },
      {
        title: 'Advanced Configuration',
        code: `from scraper import ProductScraper

scraper = ProductScraper(
    base_url='https://example.com/products',
    rate_limit=2,
    headers={
        'User-Agent': 'Mozilla/5.0 (compatible; ProductBot/1.0)'
    },
    retry_attempts=3,
    timeout=10
)

# Scrape with custom selectors
products = scraper.scrape_products(
    max_pages=10,
    selectors={
        'title': '.product-title',
        'price': '.product-price',
        'image': '.product-image img'
    }
)`,
        language: 'python',
      },
    ],
    relatedResources: ['2', '5'],
    featured: true,
    published: true,
  },
  {
    id: '2',
    slug: 'zapier-email-automation-template',
    title: 'Zapier Email Automation Template',
    description: 'Pre-built Zapier workflow for automating email responses, lead capture, and CRM updates.',
    fullDescription: `This Zapier template automates your entire email workflow, from capturing leads to updating your CRM and sending personalized follow-ups. It connects Gmail, Google Sheets, and your favorite CRM tool.

Save 10+ hours per week on manual email management and never miss a lead again.`,
    category: 'Templates',
    difficulty: 'Beginner',
    tags: ['zapier', 'email', 'automation', 'crm', 'no-code'],
    downloadUrl: 'https://zapier.com/shared/import-template/abc123',
    githubUrl: undefined,
    author: {
      name: 'Sarah Chen',
      url: 'https://twitter.com/sarahchen',
    },
    dateAdded: '2025-01-10T00:00:00Z',
    downloads: 567,
    rating: 4.9,
    ratingCount: 45,
    prerequisites: [
      'Zapier account (free or paid)',
      'Gmail account',
      'Google Sheets access',
      'CRM account (HubSpot, Salesforce, or Pipedrive)',
    ],
    dependencies: [],
    installationSteps: [
      'Click the "Import Template" link above',
      'Sign in to your Zapier account',
      'Connect your Gmail account when prompted',
      'Connect your Google Sheets account',
      'Connect your CRM account',
      'Customize the email templates in the Zap settings',
      'Test the workflow with a sample email',
      'Turn on the Zap',
    ],
    usageExamples: [
      {
        title: 'Workflow Overview',
        code: `Trigger: New email received in Gmail (with specific label)
↓
Filter: Check if email contains keywords like "quote", "pricing", "demo"
↓
Action 1: Add contact to Google Sheets
↓
Action 2: Create/update contact in CRM
↓
Action 3: Send personalized auto-reply
↓
Action 4: Notify team via Slack`,
        language: 'text',
      },
    ],
    relatedResources: ['4', '5'],
    featured: true,
    published: true,
  },
  {
    id: '3',
    slug: 'playwright-browser-automation-guide',
    title: 'Playwright Browser Automation Guide',
    description: 'Complete guide to automating browser tasks with Playwright, including login flows, form filling, and data extraction.',
    fullDescription: `Master browser automation with this comprehensive Playwright guide. Learn how to automate repetitive web tasks, test web applications, and extract data from dynamic websites.

Includes real-world examples for automating login flows, filling forms, taking screenshots, and handling complex user interactions.`,
    category: 'Guides',
    difficulty: 'Advanced',
    tags: ['playwright', 'automation', 'testing', 'javascript', 'browser'],
    downloadUrl: 'https://github.com/workfreework/toolkit/releases/download/v1.0/playwright-guide.pdf',
    githubUrl: 'https://github.com/workfreework/playwright-automation-guide',
    author: {
      name: 'Mike Rodriguez',
      url: 'https://mikerodriguez.dev',
    },
    dateAdded: '2025-01-05T00:00:00Z',
    downloads: 234,
    rating: 4.8,
    ratingCount: 18,
    prerequisites: [
      'Node.js 18 or higher',
      'Basic JavaScript/TypeScript knowledge',
      'Understanding of async/await',
      'Familiarity with CSS selectors',
    ],
    dependencies: [
      '@playwright/test@^1.40.0',
      'typescript@^5.0.0',
      'dotenv@^16.0.0',
    ],
    installationSteps: [
      'Clone the repository or download the guide',
      'Install Node.js if not already installed',
      'Run: npm install @playwright/test',
      'Install browsers: npx playwright install',
      'Copy example scripts from the guide',
      'Configure your .env file with credentials',
    ],
    usageExamples: [
      {
        title: 'Automated Login Flow',
        code: `import { test, expect } from '@playwright/test';

test('automated login and data extraction', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://example.com/login');
  
  // Fill login form
  await page.fill('input[name="email"]', process.env.EMAIL);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('button[type="submit"]');
  
  // Wait for dashboard
  await page.waitForURL('**/dashboard');
  
  // Extract data
  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.data-row')).map(row => ({
      title: row.querySelector('.title')?.textContent,
      value: row.querySelector('.value')?.textContent,
    }));
  });
  
  console.log('Extracted data:', data);
});`,
        language: 'typescript',
      },
      {
        title: 'Form Automation',
        code: `import { test } from '@playwright/test';

test('fill complex form', async ({ page }) => {
  await page.goto('https://example.com/form');
  
  // Text inputs
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  
  // Select dropdown
  await page.selectOption('#country', 'US');
  
  // Checkbox
  await page.check('#agreeToTerms');
  
  // Radio button
  await page.check('input[name="plan"][value="premium"]');
  
  // File upload
  await page.setInputFiles('#document', './files/resume.pdf');
  
  // Submit
  await page.click('button[type="submit"]');
  
  // Wait for success message
  await page.waitForSelector('.success-message');
});`,
        language: 'typescript',
      },
    ],
    relatedResources: ['1', '5'],
    featured: false,
    published: true,
  },
  {
    id: '4',
    slug: 'make-workflow-template',
    title: 'Make.com Workflow Template',
    description: 'Visual automation workflow for connecting apps and automating business processes without code.',
    fullDescription: `This Make.com (formerly Integromat) template provides a complete workflow for automating your business operations. Connect multiple apps, transform data, and create complex automation scenarios with a visual interface.

Perfect for automating invoicing, customer onboarding, social media posting, and more.`,
    category: 'Workflows',
    difficulty: 'Intermediate',
    tags: ['make', 'integromat', 'no-code', 'automation', 'workflow'],
    downloadUrl: 'https://make.com/templates/import/xyz789',
    githubUrl: undefined,
    author: {
      name: 'Emma Thompson',
      url: 'https://emmathompson.io',
    },
    dateAdded: '2024-12-28T00:00:00Z',
    downloads: 189,
    rating: 4.6,
    ratingCount: 12,
    prerequisites: [
      'Make.com account (free tier available)',
      'Connected apps (varies by use case)',
      'Basic understanding of data mapping',
    ],
    dependencies: [],
    installationSteps: [
      'Click the "Import Template" link',
      'Sign in to your Make.com account',
      'Review the workflow structure',
      'Connect your apps (Gmail, Slack, Airtable, etc.)',
      'Configure data mappings for your specific needs',
      'Test the scenario with sample data',
      'Activate the scenario',
      'Monitor execution logs',
    ],
    usageExamples: [
      {
        title: 'Workflow Structure',
        code: `Trigger: Webhook receives new order
↓
Module 1: Parse JSON data
↓
Module 2: Create customer in Airtable
↓
Module 3: Generate invoice PDF
↓
Module 4: Send invoice via Gmail
↓
Module 5: Post notification to Slack
↓
Module 6: Update inventory in Google Sheets`,
        language: 'text',
      },
    ],
    relatedResources: ['2', '5'],
    featured: false,
    published: true,
  },
  {
    id: '5',
    slug: 'n8n-self-hosted-automation-guide',
    title: 'n8n Self-Hosted Automation Setup Guide',
    description: 'Complete guide to setting up n8n, the open-source automation platform, on your own server.',
    fullDescription: `Take control of your automation with n8n, a powerful open-source alternative to Zapier and Make.com. This guide walks you through setting up n8n on your own server, creating workflows, and integrating with 300+ apps.

Own your data, avoid subscription fees, and build unlimited workflows with this self-hosted solution.`,
    category: 'Integrations',
    difficulty: 'Advanced',
    tags: ['n8n', 'self-hosted', 'open-source', 'automation', 'docker'],
    downloadUrl: 'https://github.com/workfreework/toolkit/releases/download/v1.0/n8n-setup-guide.pdf',
    githubUrl: 'https://github.com/workfreework/n8n-setup-scripts',
    author: {
      name: 'WorkFreeWork Team',
      url: 'https://workfreework.com',
    },
    dateAdded: '2024-12-20T00:00:00Z',
    downloads: 412,
    rating: 4.9,
    ratingCount: 34,
    prerequisites: [
      'VPS or dedicated server (2GB RAM minimum)',
      'Domain name with DNS access',
      'Basic Linux command line knowledge',
      'Docker and Docker Compose installed',
    ],
    dependencies: [
      'docker@^24.0.0',
      'docker-compose@^2.20.0',
      'nginx (for reverse proxy)',
      'certbot (for SSL certificates)',
    ],
    installationSteps: [
      'SSH into your server',
      'Clone the setup repository: git clone https://github.com/workfreework/n8n-setup-scripts',
      'Navigate to directory: cd n8n-setup-scripts',
      'Copy environment file: cp .env.example .env',
      'Edit .env with your domain and credentials',
      'Run setup script: ./setup.sh',
      'Configure DNS A record to point to your server IP',
      'Access n8n at https://your-domain.com',
      'Complete initial setup wizard',
    ],
    usageExamples: [
      {
        title: 'Docker Compose Configuration',
        code: `version: '3.8'

services:
  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=\${N8N_USER}
      - N8N_BASIC_AUTH_PASSWORD=\${N8N_PASSWORD}
      - N8N_HOST=\${N8N_HOST}
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://\${N8N_HOST}/
      - GENERIC_TIMEZONE=America/New_York
    volumes:
      - n8n_data:/home/node/.n8n
      - ./workflows:/workflows

volumes:
  n8n_data:`,
        language: 'yaml',
      },
      {
        title: 'Example Workflow: Email to Slack',
        code: `// This is a simplified representation of an n8n workflow
{
  "nodes": [
    {
      "name": "Email Trigger",
      "type": "n8n-nodes-base.emailReadImap",
      "parameters": {
        "mailbox": "INBOX",
        "options": {
          "filter": {
            "from": "important@example.com"
          }
        }
      }
    },
    {
      "name": "Extract Data",
      "type": "n8n-nodes-base.function",
      "parameters": {
        "functionCode": "return items.map(item => ({
          subject: item.json.subject,
          from: item.json.from,
          body: item.json.textPlain
        }));"
      }
    },
    {
      "name": "Send to Slack",
      "type": "n8n-nodes-base.slack",
      "parameters": {
        "channel": "#alerts",
        "text": "New important email: {{$json.subject}}"
      }
    }
  ]
}`,
        language: 'json',
      },
    ],
    relatedResources: ['2', '4'],
    featured: true,
    published: true,
  },
]

/**
 * Get all published toolkit resources
 */
export function getPublishedResources(): ToolkitResource[] {
  return toolkitResources.filter((resource) => resource.published)
}

/**
 * Get a resource by slug
 */
export function getResourceBySlug(slug: string): ToolkitResource | undefined {
  return toolkitResources.find((resource) => resource.slug === slug && resource.published)
}

/**
 * Get featured resources
 */
export function getFeaturedResources(): ToolkitResource[] {
  return toolkitResources.filter((resource) => resource.featured && resource.published)
}

/**
 * Filter resources based on criteria
 */
export function filterResources(
  search?: string,
  categories?: string[],
  difficulty?: string[],
  tags?: string[]
): ToolkitResource[] {
  let filtered = getPublishedResources()

  if (search) {
    const searchLower = search.toLowerCase()
    filtered = filtered.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchLower) ||
        resource.description.toLowerCase().includes(searchLower) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  }

  if (categories && categories.length > 0) {
    filtered = filtered.filter((resource) => categories.includes(resource.category))
  }

  if (difficulty && difficulty.length > 0) {
    filtered = filtered.filter((resource) => difficulty.includes(resource.difficulty))
  }

  if (tags && tags.length > 0) {
    filtered = filtered.filter((resource) =>
      tags.some((tag) => resource.tags.includes(tag))
    )
  }

  return filtered
}
