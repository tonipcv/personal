export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-normal tracking-tight">Blog</h1>
          <hr className="mt-3 border-zinc-200" />
        </header>

        <main className="font-serif leading-relaxed">
          <section className="space-y-6">
            <article>
              <h2 className="text-xl font-serif font-normal">
                <a href="/blog/mhc-why-residual-connections-were-never-really-neutral" className="text-zinc-900 hover:underline">
                  mHC: Why Residual Connections Were Never Really “Neutral”
                </a>
              </h2>
              <p className="text-zinc-700">
                A geometric reframing of residual connections and the case for manifold-constrained hyper-connections.
              </p>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}
