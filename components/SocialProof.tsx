/**
 * Social Proof Component
 * Displays trust signals and testimonials for credibility
 */

interface Testimonial {
  quote: string
  author: string
  role: string
  achievement?: string
}

const testimonials: Testimonial[] = [
  {
    quote: "I went from 60-hour weeks to 20 hours of actual work. The rest is automated. My revenue doubled.",
    author: "Sarah K.",
    role: "SaaS Founder",
    achievement: "$15K → $30K MRR"
  },
  {
    quote: "The playbook showed me how to turn my side project into a 6-figure business without hiring a team.",
    author: "Marcus T.",
    role: "Indie Hacker",
    achievement: "0 → $120K/year"
  },
  {
    quote: "Best investment I've made. Paid for itself in the first month by automating my client onboarding.",
    author: "Jessica R.",
    role: "Consultant",
    achievement: "Saved 15hrs/week"
  }
]

export function SocialProof() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">5,000+</div>
            <div className="text-gray-400">Newsletter Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">1,200+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$2.5M+</div>
            <div className="text-gray-400">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">15,000+</div>
            <div className="text-gray-400">Hours Automated</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            What Members Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border-2 border-gray-700 neon-border neon-backglow--white"
              >
                <div className="mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-4 italic">{testimonial.quote}</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  {testimonial.achievement && (
                    <div className="text-sm text-green-400 mt-2 font-semibold">
                      {testimonial.achievement}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>100% Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Live Activity Feed Component
 * Shows recent member activity for social proof
 */
export function LiveActivityFeed() {
  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm">
      <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-4 shadow-2xl neon-border--green">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-white">James from Seattle</div>
            <div className="text-xs text-gray-400">just joined Operator tier</div>
          </div>
          <div className="text-xs text-gray-500">2m ago</div>
        </div>
      </div>
    </div>
  )
}
