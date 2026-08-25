import { NextRequest, NextResponse } from 'next/server'
import { verifyPaystackTransaction } from '@/lib/paystack'

export async function POST(req: NextRequest) {
  try {
    const { reference } = await req.json()
    if (!reference) return NextResponse.json({ error: 'Reference required' }, { status: 400 })
    const data = await verifyPaystackTransaction(reference)
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Verification failed' }, { status: 500 })
  }
}
export async function GET(req: NextRequest) {
  const ref = req.nextUrl.searchParams.get('reference')
  if (!ref) return NextResponse.json({ error: 'Reference required' }, { status: 400 })
  try {
    const data = await verifyPaystackTransaction(ref)
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Verification failed' }, { status: 500 })
  }
}
