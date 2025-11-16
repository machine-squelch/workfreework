import { PlanDefinition } from '@/types/plans'

export const corePlans: PlanDefinition[] = [
  {
    id: 'signal',
    name: 'Signal',
    price: '$0',
    period: '/mo',
    description: 'Newsletter access + Ronny Lite nudges for people testing the waters.',
    features: [
      'Weekly newsletter + manifesto essays',
      'Limited Ronny Lite replies with gated prompts',
      'Public tool stack + playbook preview',
      'Community announcements + open office hours',
    ],
    badge: 'Free',
    actions: [
      {
        label: 'Start Free',
        href: '/newsletter',
      },
    ],
    note: 'No credit card. Opt out anytime.',
  },
  {
    id: 'builder',
    name: 'Builder',
    price: '$19',
    period: '/mo',
    description: 'Unlock the Collective, template vault, and full Ronny Pro intelligence.',
    features: [
      'Full community (Discord/Slack) access',
      'Template + automation workflow vault',
      'Ronny Pro full answers + custom prompts',
      'Weekly accountability threads + office hours',
    ],
    actions: [
      {
        label: 'Join Builder →',
        href: '/api/checkout?tier=builder',
      },
    ],
  },
  {
    id: 'operator',
    name: 'Operator',
    price: '$79',
    period: '/mo',
    description: 'Live sprints, automation kits, and revenue scorecards for serious operators.',
    features: [
      'Everything in Builder',
      'Weekly live sprints + ship nights',
      'Automation kits + deployment reviews',
      'Revenue scorecards & ops critiques',
    ],
    badge: 'Most Valuable',
    highlight: true,
    actions: [
      {
        label: 'Apply for Operator',
        href: '/api/checkout?tier=operator',
      },
    ],
    note: 'Limited seats added monthly.',
  },
  {
    id: 'accelerator',
    name: 'Accelerator',
    price: '$2,000',
    period: '6-week pod',
    description: 'Private pod, AI audit, and done-for-you build team for people buying back time.',
    features: [
      'Everything in Operator',
      '6-week transformation pod (max 8)',
      'Private AI + automation audit',
      'Done-with-you monetization playbook',
    ],
    actions: [
      {
        label: 'Email to Book Cohort',
        href: 'mailto:adam@workfreework.com?subject=Accelerator%20Cohort%20Application',
      },
      {
        label: 'Email about DFY ($5k)',
        href: 'mailto:adam@workfreework.com?subject=Accelerator%20DFY',
      },
    ],
    note: 'No checkout yet — email to secure a pod slot or DFY sprint.',
  },
]

export const homepagePlans = corePlans
export const communityPlans = corePlans
export const pricingPlans = corePlans
