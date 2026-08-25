const BREVO_API_URL = 'https://api.brevo.com/v3'

export async function addBrevoContact(opts: {
  email: string
  firstName?: string
  listIds: number[]
  updateEnabled?: boolean
}) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error('BREVO_API_KEY not configured')
  const res = await fetch(`${BREVO_API_URL}/contacts`, {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      email: opts.email,
      attributes: { FIRSTNAME: opts.firstName || '' },
      listIds: opts.listIds,
      updateEnabled: opts.updateEnabled ?? true,
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok && data.code !== 'duplicate_parameter') {
    throw new Error(data.message || `Brevo error ${res.status}`)
  }
  return data
}

export async function tagBrevoBuyer(opts: {
  email: string
  amount?: number
  productName?: string
}) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error('BREVO_API_KEY not configured')
  const buyersListId = process.env.BREVO_BUYERS_LIST_ID
  const listIds = buyersListId ? [parseInt(buyersListId, 10)] : []
  const res = await fetch(`${BREVO_API_URL}/contacts`, {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      email: opts.email,
      attributes: {
        LAST_PURCHASE_DATE: new Date().toISOString(),
        PRODUCT_NAME: opts.productName || 'AI Income Blueprint',
        AMOUNT: opts.amount ?? 97,
      },
      listIds,
      updateEnabled: true,
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok && data.code !== 'duplicate_parameter') {
    throw new Error(data.message || `Brevo buyer tag error ${res.status}`)
  }
  return data
}
