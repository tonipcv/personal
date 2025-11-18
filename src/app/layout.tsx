/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google';
import Script from "next/script"
import { LanguageProvider } from './components/LanguageProvider'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Indibrief - Tech Debriefs',
  description: 'Indibrief publishes curated analysis and research on artificial intelligence, venture capital, and regulation.',
  keywords: [
    'custom app development',
    'rapid app deployment',
    'tech startup',
    'influencer platform',
    'scalable solutions',
    'white label software',
    'audience monetization',
    'digital assets',
    'creator economy',
    'tech careers',
    'software development',
    'Abu Dhabi tech jobs',
    'remote tech jobs',
    'developer positions',
    'tech opportunities',
    'Abu Dhabi jobs',
    'remote jobs',
    'cybersecurity',
    'infrastructure security',
    'software architecture',
    'cloud solutions',
    'enterprise software',
    'secure development',
    'tech consulting'
  ],
  authors: [{ name: 'Indibrief', url: 'https://indibrief.com' }],
  creator: 'Indibrief',
  publisher: 'Indibrief',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon-32x32.png' }
    ]
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Indibrief - Tech Debriefs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://indibrief.com',
    languages: {
      'en-US': 'https://indibrief.com'
    }
  },
  openGraph: {
    title: 'Indibrief - Tech Debriefs',
    description: 'Curated analysis and research on AI, venture capital, and regulation.',
    url: 'https://indibrief.com',
    siteName: 'Indibrief',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        type: 'image/svg+xml',
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indibrief - Tech Debriefs',
    description: 'Curated analysis and research on AI, venture capital, and regulation.',
    images: ['/og-image.svg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  category: 'technology',
  applicationName: 'Indibrief - Tech Debriefs',
  referrer: 'origin-when-cross-origin',
  assets: ['/careers'],
  metadataBase: new URL('https://indibrief.com')
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="icon" href="/favicon-32x32.png" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXMRT2BN');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXMRT2BN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
