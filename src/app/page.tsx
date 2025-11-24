/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
// no useSearchParams to avoid Suspense requirement during prerender

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-normal tracking-tight">Indibrief</h1>
          <hr className="mt-3 border-zinc-200" />
        </header>

        <main className="font-serif leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-normal">About</h2>
            <p>
              I am India Piercy. I hold a degree from the University of Bristol and a master’s degree from the London School of Economics and Political Science (LSE).
            </p>
            <p>
              My work focuses on artificial intelligence and regulation. I founded Indibrief to share my research and to curate the news and analysis that matter most in these fields.
            </p>
            <p>
              Suggestions or requests to connect are welcome at <a href="mailto:hi@indibrief.com" className="text-blue-700 underline">hi@indibrief.com</a>.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
