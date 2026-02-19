/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
// no useSearchParams to avoid Suspense requirement during prerender

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
       
          <nav className="mt-2">
            <a href="/blog" className="text-sm text-blue-700 underline">Blog</a>
          </nav>
          <hr className="mt-3 border-zinc-200" />
        </header>

        <main className="font-serif leading-relaxed">
          <section className="space-y-4">
            <h1 className="text-3xl font-serif font-normal">Hi, I'm Toni Nasc.</h1>
            <p>
              My work and research focus on distributed systems, data governance, and infrastructure that enforces guarantees.
            </p>
            <p>
              I’ve built retry-safe transactional systems and Rust-based sidecar components for sensitive data control within database clusters, with a strong emphasis on reliability and predictable system behavior.
            </p>
            <p>
              I began programming at 14 with Python. That same year, I won a national mathematics olympiad in Brazil. After high school, I was admitted to a public university, but was already building and selling software applications while pursuing entrepreneurial projects.
            </p>
            <p>
              Throughout my career, I’ve completed advanced coursework in Computer Science, Cybersecurity, and Machine Learning, and have worked on multiple research-oriented technical challenges across infrastructure and applied AI.
            </p>
            <p>
              I’m currently exploring governance-enforced data pipelines and high-performance infrastructure architectures through my work at Xase.ai.
            </p>
            <p>
              My mission is to help AI systems reach higher levels of specialization in domains where training data is scarce, sensitive, or highly regulated.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
