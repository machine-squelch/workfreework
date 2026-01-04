'use client';

import { motion } from 'framer-motion';
import { Shield, Check, FileText, AlertTriangle } from 'lucide-react';

/**
 * Insider Vault - Terms of Use Page
 * Legal terms and usage guidelines
 */
export default function InsiderVaultTermsPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Header is already rendered in layout.tsx */}

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 bg-gradient-to-br from-background via-background-secondary to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-accent-cyan" aria-hidden="true" />
                </div>
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4">
                Insider Vault - Terms of Use
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Please read these terms carefully before purchasing or using the GrooVeo Pro Insider Vault
              </p>
              <p className="text-sm text-text-muted mt-4">
                Last Updated: October 25, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Agreement to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 flex items-center">
                <Check className="w-6 h-6 text-accent-cyan mr-2" aria-hidden="true" />
                1. Agreement to Terms
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  By purchasing or accessing the GrooVeo Pro Insider Vault (the "Vault"), you agree to be bound by these Terms of Use. 
                  If you do not agree to these terms, please do not purchase or use the Vault.
                </p>
                <p>
                  The Vault includes digital content, training materials, tools, and access to private communities as specified in 
                  your chosen tier (Prompter's Playbook, Pro Vault, or Insider Circle).
                </p>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 flex items-center">
                <Shield className="w-6 h-6 text-accent-cyan mr-2" aria-hidden="true" />
                2. Intellectual Property Rights
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  All content within the Insider Vault—including but not limited to videos, written materials, prompt templates, 
                  tools, software, and community discussions—represents proprietary knowledge and techniques developed by 
                  GrooVeo Pro (Adam Gurley).
                </p>
                <p className="font-semibold text-text-primary">
                  All materials are protected by copyright and other intellectual property laws.
                </p>
                <p>
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy, reproduce, or redistribute any Vault content</li>
                  <li>Share login credentials or access with others</li>
                  <li>Record, screenshot, or capture content for redistribution</li>
                  <li>Sell, license, or commercially exploit Vault materials</li>
                  <li>Create derivative works based on Vault content</li>
                </ul>
              </div>
            </motion.div>

            {/* Personal Use License */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 flex items-center">
                <Check className="w-6 h-6 text-accent-cyan mr-2" aria-hidden="true" />
                3. Personal Use License
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  You are granted a <span className="font-semibold text-text-primary">non-transferable, non-exclusive license</span> to 
                  use the Vault content for your personal or business video creation.
                </p>
                
                <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg p-4 my-4">
                  <p className="font-semibold text-accent-cyan mb-2">✅ YOU MAY:</p>
                  <ul className="list-disc list-inside space-y-1 text-text-primary">
                    <li>Use techniques and strategies in your own video projects</li>
                    <li>Apply methods to client work and commercial projects</li>
                    <li>Reference concepts when creating your own content</li>
                    <li>Download materials for personal offline use</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 my-4">
                  <p className="font-semibold text-red-400 mb-2">❌ YOU MAY NOT:</p>
                  <ul className="list-disc list-inside space-y-1 text-text-primary">
                    <li>Share, copy, or distribute materials publicly or privately</li>
                    <li>Teach these methods in courses or workshops without permission</li>
                    <li>Resell or repackage this knowledge in any format</li>
                    <li>Post prompts, templates, or formulas on social media or forums</li>
                    <li>Provide access to others (each person needs their own license)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Why We Ask You Not to Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-accent-gold mr-2" aria-hidden="true" />
                4. Why We Ask You Not to Share
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p className="text-lg text-text-primary">
                  This knowledge gives you a competitive advantage. By keeping it exclusive, you maintain that edge.
                </p>
                <p>
                  If everyone has the same prompt formulas and techniques, no one has an advantage. We're limiting access to 
                  500 members precisely to protect YOUR investment and YOUR competitive position in the market.
                </p>
                <p className="font-semibold text-accent-cyan">
                  We're not trying to gatekeep—we're protecting YOUR success.
                </p>
                <p>
                  By sharing this content, you would:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate copyright law (subject to legal action)</li>
                  <li>Devalue your own competitive advantage</li>
                  <li>Harm the exclusivity that makes this valuable</li>
                  <li>Result in immediate termination of your access (no refund)</li>
                </ul>
              </div>
            </motion.div>

            {/* No Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
                5. No Guarantees (Honesty)
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We believe these techniques work—we use them ourselves every day and have seen consistent results. However, 
                  we <span className="font-semibold text-text-primary">cannot guarantee specific outcomes</span> for you.
                </p>
                <p>
                  Your results depend on many factors including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your creativity and how you apply the knowledge</li>
                  <li>The effort and practice you invest</li>
                  <li>Evolving AI model capabilities (Veo updates, new tools)</li>
                  <li>Your specific use cases and industry</li>
                </ul>
                <p className="font-semibold text-text-primary">
                  We're selling education and expertise, not guaranteed results.
                </p>
                <p>
                  Anyone who promises you'll "definitely go viral" or "make $X guaranteed" is lying. We won't do that.
                </p>
              </div>
            </motion.div>

            {/* Refund Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
                6. Refund Policy
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p className="text-lg text-accent-cyan font-semibold">
                  30-day money-back guarantee. No questions asked.
                </p>
                <p>
                  If you're not satisfied with the Vault for any reason, email{' '}
                  <a href="mailto:support@grooveo-pro.com" className="text-accent-cyan hover:text-accent-gold transition-colors">
                    support@grooveo-pro.com
                  </a>{' '}
                  within 30 days of purchase and we'll issue a full refund.
                </p>
                <p className="font-semibold text-text-primary">
                  Upon refund, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delete all downloaded materials</li>
                  <li>Stop using any techniques or knowledge from the Vault</li>
                  <li>Leave any private communities (Discord, Slack)</li>
                </ul>
                <p>
                  After 30 days, all sales are final. Subscription members can cancel anytime but will not receive refunds 
                  for partial months.
                </p>
              </div>
            </motion.div>

            {/* Account Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
                7. Account Termination
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We reserve the right to terminate your access immediately (without refund) if you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate these Terms of Use</li>
                  <li>Share or redistribute Vault content</li>
                  <li>Attempt to reverse-engineer our tools or software</li>
                  <li>Engage in abusive or harmful behavior in communities</li>
                  <li>Use the content for illegal or unethical purposes</li>
                </ul>
              </div>
            </motion.div>

            {/* Updates and Changes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
                8. Updates and Changes
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We regularly update the Vault with new content, techniques, and tools as AI video generation evolves.
                </p>
                <p>
                  <span className="font-semibold text-text-primary">One-time purchase members:</span> Receive all updates within 
                  their tier for the first 12 months, then may need to upgrade for major new releases.
                </p>
                <p>
                  <span className="font-semibold text-text-primary">Subscription members:</span> Receive all updates while 
                  subscription is active.
                </p>
                <p>
                  <span className="font-semibold text-text-primary">Insider Circle members:</span> Receive lifetime updates 
                  (all future content included forever).
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
                9. Limitation of Liability
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  GrooVeo Pro and its creators shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of (or inability to use) the Vault.
                </p>
                <p>
                  This includes but is not limited to: loss of profits, data, or business opportunities.
                </p>
                <p className="font-semibold text-text-primary">
                  Maximum liability is limited to the amount you paid for the Vault.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
                10. Governing Law
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  These Terms of Use are governed by and construed in accordance with the laws of the State of California, 
                  United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these terms or your use of the Vault shall be resolved through binding arbitration 
                  in accordance with California law.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
                11. Contact Information
              </h2>
              <div className="bg-surface border border-border rounded-lg p-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  If you have questions about these Terms of Use, please contact us:
                </p>
                <div className="space-y-2 text-text-primary">
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:support@grooveo-pro.com" className="text-accent-cyan hover:text-accent-gold transition-colors">
                      support@grooveo-pro.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Legal:</span>{' '}
                    <a href="mailto:legal@grooveo-pro.com" className="text-accent-cyan hover:text-accent-gold transition-colors">
                      legal@grooveo-pro.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Acceptance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-cyan/10 to-accent-gold/10 border border-accent-cyan/30 rounded-xl p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
                By Purchasing the Insider Vault, You Agree to These Terms
              </h3>
              <p className="text-text-secondary mb-6">
                Please read carefully and ensure you understand your rights and obligations before proceeding with your purchase.
              </p>
              <a
                href="/insider-vault"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-gold hover:from-accent-gold hover:to-accent-cyan text-background font-bold rounded-lg transition-all duration-300 shadow-lg"
              >
                Return to Insider Vault
              </a>
            </motion.div>

          </div>
        </section>
      </main>

      {/* Footer is already rendered in layout.tsx */}
    </div>
  );
}



