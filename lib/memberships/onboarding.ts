import { notifyDiscord } from '@/lib/notifications/discord'

export type MembershipPayload = {
  tier: string
  email?: string | null
  customerId?: string | null
  sessionId?: string | null
  subscriptionId?: string | null
}

export async function grantTierAccess(payload: MembershipPayload) {
  const { tier, email, customerId, sessionId } = payload
  await notifyDiscord(`✅ New ${tier} member: ${email ?? 'unknown email'} (customer ${customerId ?? 'n/a'})`)
  console.log('[Membership] Grant access', { tier, email, customerId, sessionId })
  // TODO: Update Clerk metadata / DB / Discord invite / Ronny unlock
}

export async function revokeTierAccess(payload: MembershipPayload) {
  const { tier, email, customerId, subscriptionId } = payload
  await notifyDiscord(`⚠️ ${tier} membership cancelled: ${email ?? 'unknown email'} (${subscriptionId ?? 'sub n/a'})`)
  console.log('[Membership] Revoke access', payload)
  // TODO: Remove roles / disable Ronny access / revoke Discord
}

export async function handlePaymentFailure(payload: MembershipPayload & { invoiceId?: string | null }) {
  const { tier, email, invoiceId } = payload
  await notifyDiscord(`❌ Payment failed for ${tier} member ${email ?? 'unknown email'} (invoice ${invoiceId ?? 'n/a'})`)
  console.log('[Membership] Payment failure', payload)
  // TODO: Notify member via email + set grace period
}
