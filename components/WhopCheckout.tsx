'use client'
import { WhopCheckoutEmbed } from '@whop/checkout/react'

export default function WhopCheckout({ sessionId, planId, email, onComplete, onClose }: { sessionId: string; planId?: string; email?: string; onComplete?: (planId: string, receiptId?: string) => void; onClose?: () => void }) {
  return (
    <div style={{ width: '100%', maxHeight: '80vh', overflow: 'auto', borderRadius: 12 }}>
      {/* @ts-ignore Whop types require exactly one of planId/sessionId — we provide sessionId */}
      <WhopCheckoutEmbed
        sessionId={sessionId}
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
