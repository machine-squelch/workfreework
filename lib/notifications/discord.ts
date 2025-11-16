export async function notifyDiscord(message: string) {
  const webhook = process.env.DISCORD_WEBHOOK_URL
  if (!webhook) {
    console.log('[Discord notify skipped]', message)
    return
  }

  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message }),
    })
  } catch (error) {
    console.error('Failed to send Discord notification', error)
  }
}
