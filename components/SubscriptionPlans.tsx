'use client'

import Link from 'next/link'
import { PlanDefinition } from '@/types/plans'
import { motion } from 'framer-motion'

const ledPositions = [
  { style: { top: '-0.6rem', left: '15%' } },
  { style: { top: '-0.6rem', left: '50%' } },
  { style: { top: '-0.6rem', left: '85%' } },
  { style: { bottom: '-0.6rem', left: '15%' } },
  { style: { bottom: '-0.6rem', left: '50%' } },
  { style: { bottom: '-0.6rem', left: '85%' } },
  { style: { left: '-0.6rem', top: '15%' } },
  { style: { left: '-0.6rem', top: '50%' } },
  { style: { left: '-0.6rem', top: '85%' } },
  { style: { right: '-0.6rem', top: '15%' } },
  { style: { right: '-0.6rem', top: '50%' } },
  { style: { right: '-0.6rem', top: '85%' } },
]

const ledColors = ['#ff3b3f', '#a6ff00', '#48f7ff', '#ffd369']

function ChristmasLights() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {ledPositions.map((pos, index) => (
        <span
          key={index}
          className="absolute block h-3 w-3 rounded-full blur-[1px]"
          style={{
            ...pos.style,
            background: ledColors[index % ledColors.length],
            boxShadow: `0 0 10px ${ledColors[index % ledColors.length]}`,
            animation: `pulse 1.5s ease-in-out ${index * 0.12}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

type SubscriptionPlansProps = {
  plans: PlanDefinition[]
  className?: string
}

export default function SubscriptionPlans({ plans, className = '' }: SubscriptionPlansProps) {
  return (
    <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 ${className}`}>
      {plans.map((plan, index) => {
        return (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl border-2 border-white/80 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 p-8 text-white shadow-[0_0_35px_rgba(255,255,255,0.5)] transition-transform duration-300 hover:-translate-y-2 ${
              plan.highlight ? 'scale-105 shadow-[0_0_55px_rgba(255,255,255,0.8)]' : ''
            }`}
          >
            <div className="absolute inset-0 rounded-3xl border border-white/60 blur-md"></div>
            {plan.highlight && <ChristmasLights />}
            <div className="relative z-10">
              {plan.badge && (
                <div className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                {plan.description && (
                  <p className="mt-2 text-sm text-gray-300">{plan.description}</p>
                )}
              </div>
              <div className="mb-8 flex items-baseline gap-2 text-white">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm text-gray-400">{plan.period}</span>}
              </div>
              <ul className="mb-10 space-y-3 text-sm text-gray-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                {(plan.actions || []).map((action, index) => {
                  const cls = `inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-semibold tracking-wide transition ${
                    action.disabled
                      ? 'cursor-not-allowed bg-gray-700 text-gray-400'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`
                  return action.href ? (
                    <Link
                      key={`${plan.id}-action-${index}`}
                      href={action.href}
                      className={cls}
                    >
                      {action.label}
                    </Link>
                  ) : (
                    <button
                      key={`${plan.id}-action-${index}`}
                      type="button"
                      disabled={action.disabled}
                      className={cls}
                    >
                      {action.label}
                    </button>
                  )
                })}
              </div>
              {plan.note && (
                <p className="mt-3 text-center text-xs text-gray-400">{plan.note}</p>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
