import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(req: NextRequest) {
  const pdfPath = path.join(process.cwd(), 'public', '300-ai-prompts-vault.pdf')
  const pdfBuffer = fs.readFileSync(pdfPath)

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename="300-ai-prompts-vault.pdf"',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}