/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
// no useSearchParams to avoid Suspense requirement during prerender

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
       
          <hr className="mt-3 border-zinc-200" />
        </header>

        <main className="font-serif leading-relaxed">
          <section className="space-y-4">
            <h1 className="text-3xl font-serif font-normal">Antonioni Nascimento Oliveira</h1>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <span className="font-semibold">Trace</span>, hybrid autonomous SWE-Bench agent that reduces context overflow and file retrieval failures using AST-aware search and iterative refinement.
              </li>
              <li>
                <span className="font-semibold">Adversaria</span>, a Rust-based adversarial testing harness for LLMs with multi-provider support and structured risk scoring.
              </li>
              <li>
                <span className="font-semibold">Aegis</span>, a deterministic capability firewall for LLMs using taint tracking and policy DSL enforcement instead of prompt filtering.
              </li>
              <li>
                <span className="font-semibold">Zenta</span>, a multi-language CLI and SDK suite for scanning and migrating classical crypto to NIST post-quantum algorithms in ML infrastructure.
              </li>
              <li>
                <span className="font-semibold">ETH.id</span>, a zero-knowledge document verification system combining local privacy filters with LLM semantic verification.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
