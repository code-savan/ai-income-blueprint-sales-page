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
  title: 'AI Income Blueprint — She Left With $43. Here\'s What She Used.',
  description:
    'The only step-by-step blueprint that takes you from complete beginner to your first AI income — whether you want sales on autopilot or fast client cash — in 30 days or less.',
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
  metadataBase: new URL('https://sales.instantleadlabs.com'),
  icons: {
    icon: [
      { url: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Crect width=\'32\' height=\'32\' rx=\'6\' fill=\'%237C3AED\'/%3E%3Ctext x=\'16\' y=\'22\' font-size=\'18\' font-family=\'sans-serif\' fill=\'%23fff\' text-anchor=\'middle\' font-weight=\'bold\'%3EA%3C/text%3E%3C/svg%3E' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'AI Income Blueprint',
    locale: 'en_US',
    title: 'AI Income Blueprint — She Left With $43. Here\'s What She Used.',
    description:
      'Choose a track, set up the tool stack, and follow the 30-day action plan with included playbooks and prompts. Start making money with free AI tools.',
    url: 'https://sales.instantleadlabs.com',
    images: [
      {
        url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3F6NuQ25OFHTqLKUwjR9KKmBRi4/hf_20260804_122239_e8bbde6a-563e-4b0a-8624-20e51980c20e.png',
        width: 1200,
        height: 630,
        alt: 'AI Income Blueprint',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Income Blueprint — She Left With $43. Here\'s What She Used.',
    description:
      'A beginner-focused AI income blueprint with two tracks, four playbooks, and a 30-day action plan. Start with free AI tools.',
    images: ['https://d8j0ntlcm91z4.cloudfront.net/user_3F6NuQ25OFHTqLKUwjR9KKmBRi4/hf_20260804_122239_e8bbde6a-563e-4b0a-8624-20e51980c20e.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bebasNeue.variable} ${dmSerif.variable}`}>
        <div id="stickyCtaRoot" />
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '000000000000000');
            fbq('track', 'PageView');
          `,
        }} />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=000000000000000&ev=PageView&noscript=1" /></noscript>
      </body>
    </html>
  )
}
