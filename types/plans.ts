export type PlanAction = {
  label: string
  href?: string
  disabled?: boolean
}

export type PlanDefinition = {
  id: string
  name: string
  price: string
  period?: string
  description?: string
  features: string[]
  badge?: string
  highlight?: boolean
  note?: string
  actions: PlanAction[]
}
