import { WhopClient } from '@whop/sdk'

let whopClient: WhopClient | null = null

export function getWhopClient() {
  const apiKey = process.env.WHOP_API_KEY
  if (!apiKey) return null
  if (!whopClient) {
    whopClient = new WhopClient({ token: apiKey })
  }
  return whopClient
}

export const WHOP_COMPANY_ID = process.env.WHOP_COMPANY_ID || 'biz_B7SGW9vL8L3pCB'
export const WHOP_PLAN_ID = process.env.WHOP_PLAN_ID || 'plan_9jNDrHbo6pkzm'
