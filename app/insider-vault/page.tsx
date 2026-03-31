'use client';

import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Crown,
  Check,
  X,
  AlertTriangle,
  TrendingUp,
  Users,
  Star,
  Lock,
  Unlock,
  Video,
  FileText,
  Wrench,
  Calendar,
  MessageCircle,
  Award,
  DollarSign,
  Clock
} from 'lucide-react';
import { useState } from 'react';

/**
 * Insider Vault Landing Page
 * Premium product offering: Prompt engineering secrets
 */
export default function InsiderVaultPage() {
  const [selectedTier, setSelectedTier] = useState<'playbook' | 'pro' | 'insider'>('pro');

  // Simulated spots remaining (will be dynamic later)
  const spotsRemaining = 13;
  const totalSpots = 500;
  const spotsTaken = totalSpots - spotsRemaining;

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Limited Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-magenta/10 border border-accent-magenta/30 rounded-full mb-8"
            >
              <AlertTriangle className="w-4 h-4 text-accent-magenta" aria-hidden="true" />
              <span className="text-sm font-medium text-accent-magenta">
                Only {spotsRemaining} spots remaining
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-text-primary mb-6 leading-tight">
              What if you could create videos that look like{' '}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-gold bg-clip-text text-transparent">
                they cost $10,000
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                ...in 30 seconds?
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
              The difference between amateur AI videos and professional masterpieces isn't the tool.{' '}
              <span className="text-text-primary font-semibold">It's what you tell it.</span>
            </p>

            {/* Body Copy */}
            <div className="max-w-3xl mx-auto mb-12 space-y-4">
              <p className="text-lg text-text-secondary leading-relaxed">
                Most creators waste <span className="text-text-primary font-semibold">6-12 months</span> figuring out AI video generation through trial and error.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                They burn through credits. They get frustrated. They settle for "good enough."
              </p>
              <p className="text-lg text-text-primary font-semibold leading-relaxed">
                I spent 2+ years and $50,000+ testing every prompt technique, every camera angle, every lighting setup. 
                I've generated over 10,000 AI videos.
              </p>
              <p className="text-xl text-accent-cyan font-bold leading-relaxed">
                I'm offering you a shortcut.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-cyan to-accent-gold hover:from-accent-gold hover:to-accent-cyan text-background font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent-cyan/50"
            >
              <Zap className="w-6 h-6 mr-2" aria-hidden="true" />
              Get Instant Access - Starting at $97
            </motion.a>

            {/* Trust Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-sm text-accent-magenta flex items-center justify-center space-x-2"
            >
              <Lock className="w-4 h-4" aria-hidden="true" />
              <span>Warning: This knowledge gives you an unfair advantage. Please don't share it publicly.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Why Listen to Me?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                I'm <span className="text-text-primary font-semibold">Adam Gurley</span>, creator of GrooVeo Pro and one of the first people to get hands-on with Google's Veo 3.1.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Clock, text: '2+ years testing AI video generation' },
                  { icon: DollarSign, text: '$50,000+ on experiments' },
                  { icon: Video, text: '10,000+ videos generated' },
                  { icon: Star, text: 'Hundreds of hours studying cinematography' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-background border border-border rounded-lg"
                  >
                    <item.icon className="w-6 h-6 text-accent-cyan flex-shrink-0" aria-hidden="true" />
                    <span className="text-text-primary">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-text-primary font-semibold">
                This isn't theory. This is battle-tested knowledge that I use every single day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAMILY RECIPE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 border border-accent-gold/30 rounded-xl p-8 sm:p-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6 text-center">
              🍝 My Philosophy on Sharing Knowledge
            </h2>
            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                My grandmother never shared her pasta sauce recipe.
              </p>
              <p>
                Not because she was mean, but because it was <span className="text-text-primary font-semibold">VALUABLE</span>. She spent decades perfecting it.
              </p>
              <p>
                This prompt engineering knowledge? I spent <span className="text-text-primary font-semibold">thousands of hours</span> and{' '}
                <span className="text-text-primary font-semibold">tens of thousands of dollars</span> figuring it out.
              </p>
              <p className="text-xl text-text-primary font-bold pt-4">
                Some people will say I should give it away for free.
              </p>
              <p>
                Those people probably don't have a business to run.
              </p>
              <p className="text-accent-cyan font-semibold">
                If you respect the craft, you respect the knowledge.<br />
                If you respect the knowledge, you understand the price.
              </p>
              <p>
                This isn't gatekeeping - it's recognizing value.
              </p>
              <p className="text-text-primary font-semibold">
                And here's the thing: if everyone has the secret sauce, it's not secret anymore. By keeping this exclusive, YOU maintain your competitive edge.
              </p>
              <p className="text-xl text-accent-gold font-bold text-center pt-4">
                Smart creators protect their advantage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION SECTION */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-12">
              You're Making These Mistakes<br />(And Don't Even Know It)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Problems */}
              <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
                <h3 className="font-heading text-2xl font-bold text-red-400 mb-6 flex items-center justify-center">
                  <X className="w-6 h-6 mr-2" aria-hidden="true" />
                  The Problems
                </h3>
                <ul className="space-y-3 text-left">
                  {[
                    'Your prompts are too complex (confusing the AI)',
                    'You\'re ignoring cinematography fundamentals',
                    'You\'re using the wrong camera movement',
                    'Your style is inconsistent across shots',
                    'You\'re fighting the AI instead of guiding it'
                  ].map((problem, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-text-secondary">{problem}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-red-400 font-semibold">
                  Result? Videos that scream "AI-generated" and waste your time.
                </p>
              </div>

              {/* Solutions */}
              <div className="bg-accent-cyan/10 border-2 border-accent-cyan/30 rounded-xl p-6">
                <h3 className="font-heading text-2xl font-bold text-accent-cyan mb-6 flex items-center justify-center">
                  <Check className="w-6 h-6 mr-2" aria-hidden="true" />
                  The Solution
                </h3>
                <ul className="space-y-3 text-left">
                  {[
                    'Exact prompt formulas for professional results',
                    'Cinematography shortcuts (2 years compressed)',
                    'Industry-specific playbooks (5 industries)',
                    'Advanced techniques (top 1% creators)',
                    'Direct access to Adam for questions'
                  ].map((solution, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-text-primary">{solution}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-accent-cyan font-semibold">
                  You're not just buying information. You're buying years of experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Choose Your Level
            </h2>
            <p className="text-xl text-text-secondary">
              All tiers include 30-day money-back guarantee
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TIER 1: Playbook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-border rounded-xl p-8 hover:border-accent-cyan/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <FileText className="w-12 h-12 text-accent-cyan mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                  The Prompter's Playbook
                </h3>
                <p className="text-text-secondary mb-4">Perfect for: Beginners</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-text-primary">$97</span>
                  <span className="text-text-secondary ml-2">one-time</span>
                </div>
                <p className="text-sm text-text-muted line-through">VALUE: $497</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Prompt Formula Framework',
                  '200+ cinematography keywords',
                  '"5 Mistakes" video course (45 min)',
                  '10 quick-win templates',
                  'Championship mindset training'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/api/checkout?tier=playbook"
                className="w-full py-4 bg-surface-secondary hover:bg-accent-cyan/20 border border-accent-cyan text-accent-cyan font-semibold rounded-lg transition-all duration-200 block text-center"
                aria-label="Get Playbook for $97"
              >
                Get Playbook - $97
              </a>
              <p className="text-xs text-text-muted text-center mt-3">
                30-day money-back guarantee
              </p>
            </motion.div>

            {/* TIER 2: Pro Vault (MOST POPULAR) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/10 border-2 border-accent-cyan rounded-xl p-8 relative shadow-xl shadow-accent-cyan/20"
            >
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex items-center space-x-1 px-4 py-1 bg-accent-cyan text-background text-sm font-bold rounded-full">
                  <Star className="w-4 h-4" aria-hidden="true" />
                  <span>MOST POPULAR</span>
                </span>
              </div>

              <div className="text-center mb-6 pt-4">
                <Sparkles className="w-12 h-12 text-accent-cyan mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                  Pro Vault
                </h3>
                <p className="text-text-secondary mb-4">Perfect for: Serious Creators</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-text-primary">$297</span>
                  <span className="text-text-secondary ml-2">one-time</span>
                </div>
                <p className="text-sm text-text-secondary">or $29/month</p>
                <p className="text-sm text-text-muted line-through mt-2">VALUE: $2,497</p>
              </div>

              <div className="mb-4 text-sm text-text-secondary">
                <strong className="text-text-primary">Everything in Playbook, PLUS:</strong>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Advanced prompt engineering (3 hrs)',
                  'Industry-specific playbooks (5)',
                  'Prompt debugging tool',
                  'Veo 3.1 mastery guide',
                  'Monthly live masterclasses',
                  'Private Discord community'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-text-primary text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/api/checkout?tier=provault"
                className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-gold hover:from-accent-gold hover:to-accent-cyan text-background font-bold rounded-lg transition-all duration-300 shadow-lg block text-center"
                aria-label="Get Pro Vault for $297"
              >
                Get Pro Vault - $297
              </a>
              <p className="text-xs text-text-muted text-center mt-3">
                30-day money-back guarantee
              </p>
            </motion.div>

            {/* TIER 3: Insider Circle (ELITE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-surface border border-accent-gold/50 rounded-xl p-8 hover:border-accent-gold transition-all duration-300"
            >
              <div className="text-center mb-6">
                <Crown className="w-12 h-12 text-accent-gold mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-heading text-2xl font-bold text-text-primary mb-2 flex items-center justify-center">
                  Insider Circle
                  <Crown className="w-5 h-5 text-accent-gold ml-2" aria-hidden="true" />
                </h3>
                <p className="text-text-secondary mb-4">Perfect for: Professionals & Agencies</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-text-primary">$997</span>
                  <span className="text-text-secondary ml-2">one-time</span>
                </div>
                <p className="text-sm text-text-secondary">or $97/month</p>
                <p className="text-sm text-text-muted line-through mt-2">VALUE: $10,000+</p>
              </div>

              <div className="mb-4 text-sm text-text-secondary">
                <strong className="text-text-primary">Everything in Pro Vault, PLUS:</strong>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Monthly 1-on-1 with Adam (30 min)',
                  'Priority email support',
                  'Proprietary AI tools',
                  'Certification program',
                  'Elite Slack community',
                  'Referral commissions (20%)',
                  'Lifetime updates'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/api/checkout?tier=insider"
                className="w-full py-4 bg-surface-secondary hover:bg-accent-gold/20 border border-accent-gold text-accent-gold font-semibold rounded-lg transition-all duration-200 block text-center"
                aria-label="Get Insider Circle for $997"
              >
                Get Insider Circle - $997
              </a>
              <p className="text-xs text-text-muted text-center mt-3">
                30-day money-back guarantee
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCARCITY SECTION */}
      <section className="py-16 bg-gradient-to-br from-accent-magenta/10 to-accent-magenta/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              🚨 Limited Availability (Here's Why)
            </h2>
            <p className="text-xl text-text-secondary mb-4">
              I'm only offering this to <span className="text-text-primary font-bold">{totalSpots} creators</span>.
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex justify-between text-sm text-text-secondary mb-2">
                <span>Spots Taken: {spotsTaken}</span>
                <span>Remaining: {spotsRemaining}</span>
              </div>
              <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-magenta to-accent-cyan transition-all duration-500"
                  style={{ width: `${(spotsTaken / totalSpots) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-4 text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
              <p className="text-text-primary font-semibold">
                Why the limit?
              </p>
              <p>
                Because if everyone has the secret sauce, it's not secret anymore.
              </p>
              <p>
                Your competitive advantage depends on exclusivity. I'm protecting <span className="text-accent-cyan font-semibold">YOUR</span> investment by limiting access.
              </p>
              <p className="text-text-primary font-bold text-xl">
                Once we hit {totalSpots}, the vault closes permanently (or the price increases to $497).
              </p>
              <p className="text-accent-gold font-semibold">
                The choice is yours.
              </p>
            </div>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 mt-8 bg-gradient-to-r from-accent-magenta to-accent-cyan hover:from-accent-cyan hover:to-accent-magenta text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg"
            >
              <Lock className="w-6 h-6 mr-2" aria-hidden="true" />
              Secure Your Spot Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-text-primary mb-12 text-center">
              Your Questions, Answered
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Why should I pay for this when there's free info online?",
                  a: "There IS free info online. But it's scattered, outdated, and often wrong. I spent 2 years and $50K figuring out what works. You're buying CURATED, TESTED knowledge that saves you months of frustration. Would you pay $97 to skip 6 months of trial and error? That's the value."
                },
                {
                  q: "What if I'm not satisfied?",
                  a: "30-day money-back guarantee. No questions asked. Just email support@grooveo-pro.com and we'll refund you immediately. (You must delete all materials upon refund, per Terms of Use.)"
                },
                {
                  q: "Is this a subscription?",
                  a: "The Playbook is one-time only ($97). Pro Vault and Insider Circle offer BOTH options: one-time payment (own it forever) or monthly subscription (cancel anytime). Your choice."
                },
                {
                  q: "Will this work with other AI video tools?",
                  a: "These techniques work with ANY AI video tool: Google Veo (all versions), Runway Gen-3, Pika, Kling AI, and any future tools. The fundamentals of prompt engineering are universal."
                },
                {
                  q: "Is this 'gatekeeping'?",
                  a: "No, it's charging for expertise. Do doctors gatekeep medicine? Do lawyers gatekeep legal knowledge? This is my profession. This is my livelihood. This took YEARS to learn. If you don't see the value, that's okay - this isn't for you."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface border border-border rounded-lg p-6"
                >
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mb-8">
              Ready to Create Videos That Look Like<br />They Cost $10,000?
            </h2>

            <div className="max-w-3xl mx-auto mb-12 space-y-4 text-lg text-text-secondary">
              <p className="text-xl">You have two choices:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <span className="text-3xl font-bold text-red-400">1️⃣</span>
                  <p className="text-text-primary mt-4">
                    Spend the next 6-12 months figuring this out yourself (like I did, wasting $50K+ in the process)
                  </p>
                </div>

                <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg p-6">
                  <span className="text-3xl font-bold text-accent-cyan">2️⃣</span>
                  <p className="text-text-primary mt-4">
                    Get instant access to everything I've learned (and start creating professional videos TODAY)
                  </p>
                </div>
              </div>

              <p className="text-xl text-text-primary font-bold pt-8">
                {spotsTaken} creators have already chosen option #2.
              </p>
              <p className="text-2xl text-accent-cyan font-bold">
                Only {spotsRemaining} spots left.
              </p>
            </div>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-accent-cyan to-accent-gold hover:from-accent-gold hover:to-accent-cyan text-background font-bold text-xl rounded-xl transition-all duration-300 shadow-2xl"
            >
              <Unlock className="w-7 h-7 mr-3" aria-hidden="true" />
              Unlock the Vault Now
            </motion.a>

            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-text-secondary">
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
                <span>30-Day Money-Back Guarantee</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
                <span>Instant Digital Access</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
                <span>Secure Payment via Stripe</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-text-secondary mb-4">
            Still not sure?
          </p>
          <p className="text-xl text-text-primary mb-6">
            Email me:{' '}
            <a
              href="mailto:adam@grooveo-pro.com"
              className="text-accent-cyan hover:text-accent-gold transition-colors duration-200 font-semibold"
            >
              adam@grooveo-pro.com
            </a>
          </p>
          <p className="text-sm text-text-muted">
            I'm happy to answer any questions before you buy.
          </p>
          <p className="text-sm text-accent-magenta mt-2">
            (But don't wait too long - we're almost at capacity.)
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}



