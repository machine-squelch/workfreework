/**
 * FAQ Component with Schema Markup
 * Optimized for AI search engines and traditional SEO
 */

import { FAQSchema } from './StructuredData'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "How is this different from other productivity courses?",
    answer: "We don't sell motivation. We sell systems. You get real automation scripts, proven workflows, and templates you can use today. Plus ongoing support in a community of operators who've already automated their way out of 9-to-5."
  },
  {
    question: "Do I need to know how to code?",
    answer: "No. Most automations use no-code tools like Zapier, Make, and n8n. For advanced users, we include code snippets and scripts, but they're optional. If you can copy-paste, you can automate."
  },
  {
    question: "How long until I see results?",
    answer: "Members typically save 5-10 hours in the first week by implementing quick wins. Building a full autonomous income system takes 2-3 months of focused work. The playbook is designed for weekend implementation."
  },
  {
    question: "What if I don't have a business yet?",
    answer: "Perfect. The playbook shows you how to build one. We cover: finding profitable niches, validating ideas in 48 hours, and launching MVPs with zero code. Most members start from zero."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes. 30-day, no-questions-asked refund. If you implement the systems and don't save at least 10 hours or make progress toward autonomy, we'll refund you immediately."
  },
  {
    question: "How is this delivered?",
    answer: "Instant access to the member portal after purchase. You get: the complete playbook (PDF + online), automation templates, private Discord community, and weekly implementation workshops."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Everything you need to know before joining
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-gray-800 p-6 rounded-lg border-2 border-gray-700 hover:border-green-400 transition-all group"
            >
              <summary className="font-semibold text-lg text-white cursor-pointer flex items-center justify-between">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="text-green-400 hover:text-green-300 font-semibold"
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  )
}
