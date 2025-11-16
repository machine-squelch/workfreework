const priceMap = [
  { id: process.env.STRIPE_PRICE_ID_BUILDER, tier: 'builder' },
  { id: process.env.STRIPE_PRICE_ID_OPERATOR, tier: 'operator' },
  { id: process.env.STRIPE_PRICE_ID_COLLECTIVE, tier: 'builder' },
  { id: process.env.STRIPE_PRICE_ID_PATRON, tier: 'operator' },
]

export function tierFromPrice(priceId?: string | null) {
  if (!priceId) return null
  const match = priceMap.find((entry) => entry.id && entry.id === priceId)
  return match?.tier ?? null
}

export function tierLabel(tier: string) {
  switch (tier) {
    case 'builder':
      return 'Builder'
    case 'operator':
      return 'Operator'
    default:
      return tier
  }
}
