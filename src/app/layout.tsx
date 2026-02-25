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
  title: 'Antonioni Nascimento Oliveira — Software Engineer (Payments, Cybersecurity, Fraud, Data)',
  description: 'Official site of Antonioni Nascimento Oliveira, software engineer with 14+ years building scalable systems in payments, cybersecurity, fraud detection, and data infrastructure.',
  keywords: [
    'Antonioni',
    'Antonioni Nascimento',
    'Antonioni Nascimento Oliveira',
    'software engineer',
    'payments',
    'payment platforms',
    'cybersecurity',
    'fraud detection',
    'anti-fraud',
    'data infrastructure',
    'scalable systems',
    'e-commerce architecture',
    'data protection',
    'Stanford cybersecurity'
  ],
  authors: [{ name: 'Antonioni Nascimento Oliveira' }],
  creator: 'Antonioni Nascimento Oliveira',
  publisher: 'Antonioni Nascimento Oliveira',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/favicon.ico' }
    ]
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Antonioni Nascimento Oliveira',
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
    canonical: '/',
    languages: {
      'en-US': '/'
    }
  },
  openGraph: {
    title: 'Antonioni Nascimento Oliveira — Software Engineer',
    description: '14+ years building scalable systems in payments, cybersecurity, fraud detection, and data infrastructure.',
    url: '/',
    siteName: 'Antonioni Nascimento Oliveira',
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
    title: 'Antonioni Nascimento Oliveira — Software Engineer',
    description: '14+ years in payments, cybersecurity, fraud detection, and data infrastructure.',
    images: ['/og-image.svg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  category: 'technology',
  applicationName: 'Antonioni Nascimento Oliveira',
  referrer: 'origin-when-cross-origin',
  assets: ['/careers'],
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
        <link rel="icon" href="/favicon.ico" />
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
        <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Antonioni Nascimento Oliveira',
            url: '/',
            description:
              'Software engineer with 14+ years building scalable systems in payments, cybersecurity, fraud detection, and data infrastructure.',
            sameAs: [
              'https://www.linkedin.com/in/antonioni/',
            ],
            jobTitle: 'Software Engineer',
          })}
        </Script>
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
