/**
 * Copyright (c) 2025 Thinkazoo LLC
 * 
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Tools & Resources - Turn CEO',
  description: 'Curated automation tools, AI assistants, templates, and resources for building a work-free life.',
  openGraph: {
    title: 'Tools & Resources - Turn CEO',
    description: 'Curated automation tools, AI assistants, templates, and resources for building a work-free life.',
    url: 'https://turnceo.com/automatic-cash-machine/tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools & Resources - Turn CEO',
    description: 'Curated automation tools, AI assistants, templates, and resources for building a work-free life.',
  },
}

export default function ToolsPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <Link 
          href="/automatic-cash-machine"
          className="text-gray-400 hover:text-white mb-6 inline-block text-sm"
        >
          ← Back to Automatic Cash Machine
        </Link>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text-strong">
          Tools & Resources
        </h1>
        <p className="text-2xl text-gray-300 mb-4">
          Vetted automation tools, templates, and workflows for reclaiming your time.
        </p>
        <p className="text-base text-cyan-400 mb-12">
          Part of the $47 Automatic Cash Machine
        </p>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md font-semibold border border-white/30">
              All Tools
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              AI & Automation
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              Productivity
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              Income & Monetization
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              Templates
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Tool 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow neon-card-cyan relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white">ChatGPT</h3>
              <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI assistant for writing, coding, and automating repetitive text-based tasks. 
              Essential for email drafts, content generation, and brainstorming.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Free + Paid</span>
              <a 
                href="https://chat.openai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold neon-text"
              >
                Visit →
              </a>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow neon-card-cyan relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Zapier</h3>
              <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Automation</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connect apps and automate workflows without code. Move data between tools, 
              trigger actions, and eliminate manual copy-paste work.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Free + Paid</span>
              <a 
                href="https://zapier.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold neon-text"
              >
                Visit →
              </a>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow neon-card-cyan relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Notion</h3>
              <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded">Productivity</span>
            </div>
            <p className="text-gray-300 mb-4">
              All-in-one workspace for notes, tasks, wikis, and databases. Build custom 
              workflows and project management systems.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Free + Paid</span>
              <a 
                href="https://notion.so" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold neon-text"
              >
                Visit →
              </a>
            </div>
          </div>

          {/* Tool 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow neon-card-cyan relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Calendly</h3>
              <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded">Productivity</span>
            </div>
            <p className="text-gray-300 mb-4">
              Automated scheduling tool that eliminates the back-and-forth of finding meeting times. 
              Set availability and let others book slots.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Free + Paid</span>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold neon-text"
              >
                Visit →
              </a>
            </div>
          </div>

          {/* Tool 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow neon-card-cyan relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Gumroad</h3>
              <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded">Income</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sell digital products, memberships, and courses with minimal setup. 
              Perfect for monetizing templates, guides, and automation workflows.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Free to start</span>
              <a 
                href="https://gumroad.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold neon-text"
              >
                Visit →
              </a>
            </div>
          </div>

          {/* Tool 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow neon-card-cyan relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Make (Integromat)</h3>
              <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Automation</span>
            </div>
            <p className="text-gray-300 mb-4">
              Visual automation platform for complex workflows. More powerful than Zapier 
              for advanced scenarios and data transformation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Free + Paid</span>
              <a 
                href="https://make.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold neon-text"
              >
                Visit →
              </a>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white">Templates & Workflows</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg neon-card-cyan relative">
              <h3 className="text-xl font-bold mb-2 text-white">Time Audit Spreadsheet</h3>
              <p className="text-gray-300 mb-4">
                Track where your time goes and identify automation opportunities.
              </p>
              <button className="btn-glass btn-glass--neon">
                Download →
              </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg neon-card-cyan relative">
              <h3 className="text-xl font-bold mb-2 text-white">AI Prompt Library</h3>
              <p className="text-gray-300 mb-4">
                50+ tested prompts for email, content, code, and customer service.
              </p>
              <button className="btn-glass btn-glass--neon">
                Download →
              </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg neon-card-cyan relative">
              <h3 className="text-xl font-bold mb-2 text-white">Income Stack Calculator</h3>
              <p className="text-gray-300 mb-4">
                Plan your alternative income streams and track progress toward work freedom.
              </p>
              <button className="btn-glass btn-glass--neon">
                Download →
              </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg neon-card-cyan relative">
              <h3 className="text-xl font-bold mb-2 text-white">Automation Decision Tree</h3>
              <p className="text-gray-300 mb-4">
                Flowchart to help you decide which tasks to automate and which tools to use.
              </p>
              <button className="btn-glass btn-glass--neon">
                Download →
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black p-12 rounded-lg text-center neon-card-cyan">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Get Weekly Tool Recommendations
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            New automation tools, vetted resources, and practical workflows in your inbox.
          </p>
          <EmailCapture 
            buttonText="Join the Newsletter"
            className="max-w-lg mx-auto"
          />
        </section>
      </div>
    </div>
  )
}

