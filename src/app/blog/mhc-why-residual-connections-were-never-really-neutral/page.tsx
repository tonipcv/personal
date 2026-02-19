export default function Post() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-normal tracking-tight">mHC: Why Residual Connections Were Never Really “Neutral”</h1>
          <hr className="mt-3 border-zinc-200" />
        </header>

        <main className="font-serif leading-relaxed prose prose-zinc max-w-none">
          <p>Most modern deep learning architectures rely on a simple idea: residual connections. ResNet, Transformers, diffusion models — all of them depend on the assumption that you can safely add representations from different layers and move on.</p>

          <p>This paper, “mHC: Manifold-Constrained Hyper-Connections”, challenges that assumption in a surprisingly fundamental way.</p>

          <p>The core claim is not incremental. It’s architectural.</p>

          <p><strong>Residual connections are not neutral operations.</strong><br />They implicitly assume a geometry — and that geometry is usually wrong.</p>

          <p>This post walks through what the paper actually says, why it matters, and what it changes about how we should think about deep networks.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">The hidden assumption behind residual connections</h2>

          <p>A standard residual block looks like this:</p>

          <pre className="bg-zinc-100 text-zinc-900 p-3 rounded"><code>output = x + F(x)</code></pre>

          <p>This works because:</p>
          <ul className="list-disc ml-6">
            <li>it stabilizes gradients</li>
            <li>it allows deeper networks</li>
            <li>it preserves information flow</li>
          </ul>

          <p>But there is a quiet assumption baked into this equation:</p>
          <p><em>x and F(x) live in the same flat Euclidean space and can be freely added.</em></p>
          <p>In practice, this assumption is almost never examined.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">Representations do not live in flat space</h2>

          <p>Empirically, we already know that intermediate representations in deep networks:</p>
          <ul className="list-disc ml-6">
            <li>lie on low-dimensional manifolds</li>
            <li>encode structured features</li>
            <li>preserve semantic constraints</li>
          </ul>
          <p>They do not occupy ℝⁿ uniformly.</p>
          <p>Adding two vectors that lie on different regions of a manifold can easily push the result off the manifold entirely.</p>
          <p>The model may recover later — but that recovery costs capacity, stability, and generalization.</p>
          <p>The paper’s first contribution is simply to take this observation seriously.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">Residual connections as geometric operations</h2>

          <p>The authors reframe residual connections not as “shortcuts,” but as geometric transformations.</p>
          <p>When you add representations, you are:</p>
          <ul className="list-disc ml-6">
            <li>interpolating between points</li>
            <li>mixing tangent directions</li>
            <li>implicitly defining how trajectories evolve through depth</li>
          </ul>
          <p>Once you view depth as a trajectory on a manifold, naive addition starts to look reckless.</p>
          <p>This reframing is subtle, but important:<br />Depth is not just stacking — it is motion through representation space.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">What are Hyper-Connections?</h2>

          <p>Hyper-connections generalize residual connections.</p>
          <p>Instead of:</p>
          <ul className="list-disc ml-6">
            <li>connecting only the previous layer</li>
          </ul>
          <p>They allow:</p>
          <ul className="list-disc ml-6">
            <li>combining representations from multiple earlier layers</li>
          </ul>
          <p>This idea alone is not new (DenseNet explored something similar), but the key difference here is how the combination is done.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">The core novelty: manifold constraints</h2>

          <p>The central contribution of mHC is simple to state:</p>
          <p><strong>All skip connections are constrained to respect the geometry of the representation manifold.</strong></p>
          <p>Instead of directly summing vectors:</p>
          <ul className="list-disc ml-6">
            <li>representations are first projected</li>
            <li>aligned through learned transformations</li>
            <li>combined in a way that preserves manifold structure</li>
          </ul>
          <p>The network learns how to mix states, not just that they should be mixed.</p>
          <p>This turns residual connections from passive shortcuts into active, learned geometric operators.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">Why this matters for deep networks</h2>

          <h3 className="text-xl font-serif font-normal mt-6">1. Reduced representation drift</h3>
          <p>Deep models often suffer from gradual semantic drift across layers. Manifold-constrained mixing keeps representations aligned over depth.</p>

          <h3 className="text-xl font-serif font-normal mt-6">2. Better gradient behavior</h3>
          <p>The model introduces multiple smooth paths for backpropagation without destabilizing updates.</p>

          <h3 className="text-xl font-serif font-normal mt-6">3. Improved generalization</h3>
          <p>Manifold constraints act as a form of implicit regularization, preventing the network from exploring implausible regions of representation space.</p>

          <h3 className="text-xl font-serif font-normal mt-6">4. Long-range reuse without chaos</h3>
          <p>Older layers can be reused without destructive interference, because alignment is learned, not assumed.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">This is not “just another residual tweak”</h2>

          <p>What makes this paper interesting is that it doesn’t optimize performance by:</p>
          <ul className="list-disc ml-6">
            <li>adding attention</li>
            <li>increasing width</li>
            <li>changing loss functions</li>
          </ul>
          <p>Instead, it questions a core design primitive that almost every architecture uses unquestioned.</p>
          <p>Residual connections were treated as algebraic operations. mHC treats them as geometric ones. That shift alone is significant.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">Implications for Transformers and LLMs</h2>

          <p>In Transformers, different layers encode different kinds of information:</p>
          <ul className="list-disc ml-6">
            <li>early layers: syntax and local structure</li>
            <li>middle layers: semantics</li>
            <li>later layers: abstraction and decision boundaries</li>
          </ul>
          <p>Naively mixing these representations can blur structure.</p>
          <p>Manifold-constrained hyper-connections suggest a cleaner alternative: reuse information across depth without collapsing representational meaning.</p>
          <p>This idea aligns well with recent work on long-context stability and representation reuse.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">The deeper insight</h2>

          <p>The most important takeaway from this paper is not the specific implementation.</p>
          <p>It’s the realization that:</p>
          <ul className="list-disc ml-6">
            <li>Depth is geometry.</li>
            <li>Skip connections define trajectories.</li>
            <li>And geometry should not be accidental.</li>
          </ul>
          <p>Once you see residual connections this way, it becomes hard to unsee.</p>

          <h2 className="text-2xl font-serif font-normal mt-10">Final thoughts</h2>

          <p>mHC does not claim to replace attention, MoE, or scaling laws. It introduces a new axis of architectural thinking.</p>
          <p>Instead of asking: <em>“How many layers can we stack?”</em></p>
          <p>It asks: <em>“What space are we moving through as we stack them?”</em></p>
          <p>That is a foundational question — and one worth paying attention to.</p>
        </main>
      </div>
    </div>
  )
}
