import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const dmSans = localFont({
  src: [
    { path: '../public/fonts/DMSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/DMSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/DMSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/DMSans-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../public/fonts/DMSans-Italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-dm-sans',
})

const bebasNeue = localFont({
  src: '../public/fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas',
})

const dmSerif = localFont({
  src: [
    { path: '../public/fonts/DMSerifDisplay-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/DMSerifDisplay-Italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: 'AI Income Blueprint — A Step-by-Step AI Income System for Beginners',
  description:
    'A practical 5-module blueprint for choosing an AI income track, setting up a beginner-safe tool stack, and following a 30-day action plan.',
  keywords: [
    'AI income',
    'make money with AI',
    'AI side hustle',
    'digital product',
    'AI freelance',
    'passive income AI',
    'AI business blueprint',
    'faceless content',
  ],
  robots: { index: true, follow: true },
  metadataBase: new URL('https://aiincomeblueprint.com'),
  openGraph: {
    type: 'website',
    siteName: 'AI Income Blueprint',
    locale: 'en_US',
    title: 'AI Income Blueprint — A Step-by-Step AI Income System for Beginners',
    description:
      'Choose a track, set up the tool stack, and follow the 30-day action plan with included playbooks and prompts.',
    url: 'https://aiincomeblueprint.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Income Blueprint',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Income Blueprint — A Step-by-Step AI Income System for Beginners',
    description:
      'A beginner-focused AI income blueprint with two tracks, four playbooks, and a 30-day action plan.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bebasNeue.variable} ${dmSerif.variable}`}>
        <div id="stickyCtaRoot" />
        {children}
      </body>
    </html>
  )
}
