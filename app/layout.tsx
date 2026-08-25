import type { Metadata } from 'next'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/sora/400.css'
import '@fontsource/sora/500.css'
import '@fontsource/sora/600.css'
import '@fontsource/sora/700.css'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'zerotopaidwithai — From Zero to Paid with AI | 30-Day System to Your First $500',
  description: 'Go from zero to your first $500 online in 30 days with zerotopaidwithai. A step-by-step system using free AI tools — pick autonomous sales or client work, follow the daily roadmap, get paid. 1,400+ students. $0 to start. $97 one-time.',
  keywords: ['zerotopaidwithai','zero to paid with AI','make money with AI','AI income system','AI side hustle','earn with AI','AI freelance system','UGC prompts AI','free AI tools income','30 day AI system'],
  applicationName: 'zerotopaidwithai',
  authors: [{ name: 'zerotopaidwithai' }],
  creator: 'zerotopaidwithai',
  publisher: 'zerotopaidwithai',
  robots: { index: true, follow: true },
  metadataBase: new URL('https://zerotopaidwithai.com'),
  icons: {
    icon: [
      { url: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Crect width=\'32\' height=\'32\' rx=\'6\' fill=\'%237C3AED\'/%3E%3Ctext x=\'16\' y=\'22\' font-size=\'18\' font-family=\'sans-serif\' fill=\'%23fff\' text-anchor=\'middle\' font-weight=\'bold\'%3EZ%3C/text%3E%3C/svg%3E' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'zerotopaidwithai',
    locale: 'en_US',
    title: 'zerotopaidwithai — From Zero to Paid with AI',
    description: 'A 30-day step-by-step system to your first $500 online using free AI tools. 1,400+ students, $0 to start, $97 one-time.',
    url: 'https://zerotopaidwithai.com',
    images: [{ url: 'https://zerotopaidwithai.com/banner.png', width: 2880, height: 1618, alt: 'zerotopaidwithai — From Zero to Paid with AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zerotopaidwithai',
    title: 'zerotopaidwithai — From Zero to Paid with AI',
    description: '30-day system to your first $500 online with free AI tools. Follow the sequence. Get paid.',
    images: ['https://zerotopaidwithai.com/banner.png'],
  },
  alternates: { canonical: 'https://zerotopaidwithai.com' },
  category: 'education',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <div id="stickyCtaRoot" />
          {children}
        </SmoothScroll>
        <script async src="https://plausible.io/js/pa-BhrrAhdJ8z0xNRVvoH8QB.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}}; plausible.init()` }} />
        {/* Placeholder tracking pixels removed — add real IDs when ready
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','000000000000000');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=000000000000000&ev=PageView&noscript=1" /></noscript>
        */}
      </body>
    </html>
  )
}
