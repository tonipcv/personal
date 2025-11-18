import type { Metadata } from 'next'
import { Mail, Linkedin, Globe, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'India Jade — Founder, Partnerships | Indibrief',
  description:
    'Executive profile of India Jade at Indibrief, leading partnerships and strategic alliances.',
  alternates: { canonical: '/india' },
  openGraph: {
    url: '/india',
    title: 'India Jade — Founder, Partnerships | Indibrief',
    description:
      'Indibrief. Focused on partnerships, strategic alliances, and growth.',
    siteName: 'Indibrief',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, type: 'image/svg+xml' }],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Jade — Founder, Partnerships | Indibrief',
    description: 'Indibrief. Partnerships and strategic alliances.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'Indibrief', url: 'https://indibrief.com' }],
}

export default function IndiaProfilePage() {
  return (
    <div className="min-h-screen bg-[#f5efe7] text-zinc-900">
      {/* Top bar (icon only, centered) */}
      <nav className="fixed w-full top-0 backdrop-blur-md z-40 transition-all duration-300 bg-[#f5efe7]/80">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Indibrief Logo"
              width={48}
              height={48}
              className="w-12 h-12 invert"
            />
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <section className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-satoshi tracking-[-0.03em]">
              IJ
            </div>

            {/* Identity */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight">India Jade</h1>
              <p className="mt-1 text-zinc-600 text-sm font-euclidCircularB tracking-[-0.04em]">
                Founder · Partnerships
              </p>
            </div>
          </div>

          {/* Bio (minimal) */}
          <p className="mt-8 text-zinc-700 text-sm sm:text-base font-euclidCircularB tracking-[-0.04em] max-w-2xl">
            Building strategic alliances that compound value for clients and partners. Focused on long-term, operator-first relationships across high-growth markets.
          </p>

          {/* Social / Contact */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100 transition-colors text-sm font-euclidCircularB tracking-[-0.04em]"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100 transition-colors text-sm font-euclidCircularB tracking-[-0.04em]"
            >
              <Twitter size={16} />
              X
            </a>
            <a
              href="#"
              aria-label="Website"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100 transition-colors text-sm font-euclidCircularB tracking-[-0.04em]"
            >
              <Globe size={16} />
              Website
            </a>
            <a
              href="mailto:hi@indibrief.com"
              aria-label="Email"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100 transition-colors text-sm font-euclidCircularB tracking-[-0.04em]"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
