'use client'
import { WhopCheckoutEmbed } from '@whop/checkout/react'

export default function WhopCheckout({ sessionId, planId, email, onComplete, onClose }: { sessionId?: string | null; planId?: string; email?: string; onComplete?: (planId: string, receiptId?: string) => void; onClose?: () => void }) {
  const props: any = sessionId ? { sessionId } : { planId: planId || 'plan_9jNDrHbo6pkzm' }
  return (
    <div className="whop-checkout-wrap" style={{ width: '100%', height: '100%', minHeight: '520px', overflow: 'auto', borderRadius: 12, WebkitOverflowScrolling: 'touch' as any }}>
      <WhopCheckoutEmbed
        {...props}
        theme="light"
        prefill={email ? { email } as any : undefined}
        themeOptions={{ accentColor: '#7C3AED', borderRadius: 10, buttonText: 'Pay $97 — Get Instant Access' }}
        returnUrl="https://www.zerotopaidwithai.com/thank-you?type=purchase"
        onComplete={(a: any, b: any) => {
          const pid = typeof a === 'string' ? a : (a?.planId || planId || '')
          const receipt = typeof b === 'string' ? b : undefined
          onComplete?.(pid, receipt)
          window.location.href = '/thank-you?type=purchase'
        }}
      />
    </div>
  )
}
