'use client'

 

interface Project {
  id: string
  title: string
  tagline: string
  content: string
}

const projects: Project[] = [
  {
    id: 'trace',
    title: 'Trace',
    tagline: 'Hybrid autonomous SWE-Bench agent that reduces context overflow and file retrieval failures using AST-aware search and iterative refinement.',
    content: `# SWE-Bench Pro Agent - Technical Overview

## Executive Summary
Production-ready autonomous agent targeting 25-30% success rate on SWE-Bench Pro Private (vs 17-23% SOTA).

## Core Innovation
70% of failures stem from:
1. **Context Overflow** - Too much irrelevant code sent to LLM
2. **Wrong File Retrieval** - Finding incorrect files to fix

**Solution:**
- Hybrid search: semantic embeddings + BM25 + AST analysis
- Token-aware context building (function-level granularity)
- Iterative refinement with failure memory (up to 30 iterations)

## Architecture

### 1. Hybrid Search Engine
- **Semantic**: Sentence-transformers + ChromaDB
- **BM25**: Traditional keyword retrieval
- **AST**: Tree-sitter structural analysis
- **Combination**: Configurable weighting (default 50/50)

### 2. Code Parser
- Multi-language: Python, JS/TS, Rust, Go, Java
- Function signature extraction
- Call graph analysis
- Compact representation for minimal tokens

### 3. LLM Client
- OpenAI (GPT-4, GPT-4o) + Anthropic (Claude 3.5)
- Automatic retry with exponential backoff
- Cost tracking per provider

### 4. Docker Executor
- Isolated execution per patch
- Git-based patch application
- Auto test detection (pytest, npm, cargo, go, maven)

### 5. Agent Orchestration
Main loop: Index → Retrieve → Generate → Apply → Test → Refine

## Quick Start

\`\`\`bash
# Setup
bash scripts/setup.sh
source venv/bin/activate

# Configure
echo "OPENAI_API_KEY=sk-..." > .env

# Solve issue
python -m swe_agent solve \\
  --repo /path/to/repo \\
  --issue "Bug description"

# Evaluate dataset
python -m swe_agent evaluate \\
  --dataset data/issues.json \\
  --results-dir results/
\`\`\`

## Performance Targets

| Metric | Target | SOTA |
|--------|--------|------|
| Success Rate | 25-30% | 17-23% |
| Avg Iterations | 10-15 | N/A |
| Avg Cost/Issue | $0.50-$2.00 | N/A |
| Avg Time/Issue | 2-5 min | N/A |

## Technology Stack
- Python 3.11+ (orchestration)
- ChromaDB (vector database)
- Tree-sitter (AST parsing)
- Docker (isolation)
- OpenAI/Anthropic APIs

## Key Features
✅ Hybrid search (3 methods)
✅ Multi-language support
✅ Iterative refinement (30 attempts)
✅ Docker isolation
✅ Cost tracking
✅ Production-ready error handling`
  },
  {
    id: 'adversaria',
    title: 'Adversaria',
    tagline: 'Rust-based adversarial testing harness for LLMs with multi-provider support and structured risk scoring.',
    content: `# Adversaria - Adversarial Testing for LLMs

## Overview
Comprehensive adversarial testing harness built in Rust for performance, reliability, and security. Automated security testing through attack suites evaluating model robustness.

## Statistics
- **Language**: Rust (Edition 2021)
- **Files**: 36 source files
- **Lines of Code**: ~8,000+
- **Test Coverage**: 19 tests (100% passing)
- **Attack Payloads**: 48 total (12 per suite × 4 suites)

## Architecture

### Core Components
1. **CLI Layer** - Commands: run, list, report
2. **Core Layer** - Types, config, error handling
3. **Providers** - OpenAI, Anthropic, Ollama
4. **Suites** - Attack suite loader/runner
5. **Reporters** - JSON/console output

### Attack Suites

**1. Prompt Injection** (12 payloads)
- Basic instruction override
- System prompt manipulation
- Delimiter confusion
- Nested injection
- Encoding bypass

**2. Jailbreak** (12 payloads)
- DAN (Do Anything Now)
- Developer mode
- Fictional framing
- Research justification

**3. Role Confusion** (12 payloads)
- Admin impersonation
- Developer role assumption
- Support staff confusion

**4. Data Exfiltration** (12 payloads)
- System prompt extraction
- Training data leak attempts
- API key extraction

## Usage

\`\`\`bash
# List suites
adversaria list

# Run tests
adversaria run --provider openai --model gpt-4

# View reports
adversaria report --list

# Test specific suites
adversaria run --suites prompt_injection,jailbreak

# Compare models
./scripts/compare_models.sh openai:gpt-4 anthropic:claude-3-opus
\`\`\`

## Installation

\`\`\`bash
# From source
git clone https://github.com/adversaria/adversaria.git
cd adversaria
cargo install --path .

# Docker
docker build -t adversaria:latest .
docker run --rm adversaria:latest list
\`\`\`

## Technical Highlights
- **Async/Await**: Tokio runtime
- **Traits**: Extensible provider system
- **Error Handling**: Custom types with thiserror
- **CLI**: Clap with derive macros
- **Progress**: Indicatif for feedback

## Security
- Environment variable API keys
- No hardcoded credentials
- Rate limiting support
- Timeout configuration`
  },
  {
    id: 'aegis',
    title: 'Aegis',
    tagline: 'Deterministic capability firewall for LLMs using taint tracking and policy DSL enforcement instead of prompt filtering.',
    content: `# Aegis v2 - LLM Capability Firewall

## Design Philosophy
Treats the LLM as an **inherently confusable deputy** where instructions and data cannot be reliably separated at the prompt level. Uses **structural isolation** and **taint tracking** instead of prompt filtering.

## Core Principles

### 1. Pessimistic Taint Propagation
Trust and sensitivity propagate conservatively:
- **Trust**: Minimum of all ancestors
- **Sensitivity**: Maximum of all ancestors

### 2. Default-Deny Policy
No capability allowed unless explicitly permitted.

### 3. Capability Declaration
Tool calls must cite source spans for taint analysis.

### 4. Deterministic Evaluation
Policy evaluation is pure function - same inputs = same output.

## Architecture Layers

\`\`\`
Application
    ↓
Gateway (hyper + tower)
    ├─ Layer 1: Classify (assign trust/sensitivity)
    ├─ Layer 2: Taint (build span graph)
    ├─ Layer 3: Policy (evaluate requests)
    └─ Layer 4: Enforce (block/allow/approve)
    ↓
Upstream LLM (Claude/GPT/Ollama)
\`\`\`

## Data Flow

1. HTTP Request → Gateway
2. **Classify**: Assign trust/sensitivity
3. **Create Span**: Add to taint graph
4. **Forward to LLM**
5. **Parse Tool Calls**: Extract capabilities
6. **Validate**: Check policy + taint rules
7. **Execute or Block**
8. **Record Decision**: Add to trace
9. **Return Response**

## Taint Propagation Example

\`\`\`
Span A (User Input, UntrustedUser, Public)
    ↓
Span B (Model Reasoning, TrustedSystem, Public)
    ↓ (tainted by A)
Span C (Tool Call, effective: UntrustedUser, Public)

Effective trust = min(TrustedSystem, UntrustedUser) = UntrustedUser
\`\`\`

## Why Taint Tracking?

**vs Prompt Filtering:**
- Content-agnostic (doesn't matter what text says)
- Operates on span graph topology
- Impossible to evade through encoding
- Deterministic and auditable

## Module Boundaries

- **aegis-core**: Fundamental types
- **aegis-taint**: Graph + propagation
- **aegis-policy**: DSL parsing + evaluation
- **aegis-firewall**: Tool call interception
- **aegis-gateway**: HTTP proxy
- **aegis-attestation**: Trace generation
- **aegis-suite**: Adversarial testing

## Performance

- Gateway overhead: ~1-2ms per request
- Upstream LLM: 100-1000ms (dominant)
- Aegis adds <1% overhead

## Deployment Modes

**Sidecar**: Run alongside application
**Gateway**: Centralized for multiple apps
**Library**: Embed directly in Rust app`
  },
  {
    id: 'zenta',
    title: 'Zenta',
    tagline: 'Multi-language CLI and SDK suite for scanning and migrating classical crypto to NIST post-quantum algorithms in ML infrastructure.',
    content: `# Zenta - Post-Quantum Cryptography Migration

## Overview
Production-ready CLI and multi-language SDK (Rust, Python, Node.js) for discovering, auditing, and migrating classical cryptography vulnerable to quantum attacks to NIST-standardized PQC algorithms.

## Core Capabilities
- Multi-language code scanning (10 languages)
- PQC operations (ML-KEM, ML-DSA, SLH-DSA)
- Intelligent cache
- Plugin system
- Dataflow analysis
- Parallel scanning
- Multi-format reporting (JSON/HTML/SARIF/PDF)

## Status
✅ **FULLY IMPLEMENTED AND OPERATIONAL**

## Core Modules

### 1. qg-core - Foundation
- Complete type system
- Classical algorithm detection (RSA, ECDSA, Ed25519, X25519, DH)
- PQC definitions (ML-KEM, ML-DSA, SLH-DSA)
- Risk scoring

### 2. qg-scanner - Analysis Engine
- Tree-sitter AST-based detection
- Python, Rust, JS/TS, Go, Java, C/C++, C#
- Context inference (model signing, API auth, TLS)
- Intelligent cache (BLAKE3, mtime)
- Parallel scanning

### 3. qg-parser - Dependency Analysis
- Cargo.toml, requirements.txt, package.json, go.mod
- Vulnerability database (500+ packages)
- Version matching

### 4. qg-pqc - Post-Quantum Crypto
- KeyPair generation for all NIST algorithms
- ML-DSA signatures (sign/verify)
- ML-KEM key encapsulation
- SLH-DSA stateless signatures
- PEM export

### 5. qg-report - Multi-Format Output
- JSON (CI/CD integration)
- HTML (styled reports)
- SARIF (GitHub Code Scanning)
- Terminal tables
- PDF (executive reports)

### 6. qg-migrator - Code Migration
- Migration plan generation
- Patch creation
- Hybrid mode (classical + PQC)
- Dry-run capability

## Quick Start

\`\`\`bash
# Scan project
./target/release/quantumguard scan ./my-project

# Generate HTML report
./target/release/quantumguard scan . --output html --out report.html

# Generate keypair
./target/release/quantumguard keygen --algorithm ml-dsa-65 --out ./keys

# Sign file
./target/release/quantumguard sign model.bin --key ./keys/ml-dsa-65.priv --out model.sig

# Verify signature
./target/release/quantumguard verify model.bin --sig model.sig --key ./keys/ml-dsa-65.pub

# Benchmark
./target/release/quantumguard bench --algorithms ml-dsa-44,ml-dsa-65,ml-dsa-87

# Fail CI on high severity
./target/release/quantumguard scan . --fail-on high
\`\`\`

## SDKs

### Python (PyO3)
\`\`\`python
import quantumguard as qg

report = qg.scan("/path/to/project")
keypair = qg.generate_keypair("ml-dsa-65")
signature = qg.sign(data, keypair.private_key)
\`\`\`

### Node.js (NAPI-RS)
\`\`\`javascript
const qg = require('quantumguard');

const report = await qg.scan('/path/to/project');
const keypair = qg.generateKeypair('ml-dsa-65');
\`\`\`

## Performance

| Algorithm | Sign/sec | Verify/sec |
|-----------|----------|------------|
| ML-DSA-44 | ~8,333 | ~10,000 |
| ML-DSA-65 | ~5,556 | ~7,500 |
| ML-DSA-87 | ~3,571 | ~5,000 |

## Statistics
- **Lines of Code**: 15,000+ Rust, 2,000+ Python, 1,500+ JS/TS
- **Crates**: 9 workspace members
- **Tests**: 100+
- **Documentation**: 5,000+ lines`
  },
  {
    id: 'ethid',
    title: 'ETH.id',
    tagline: 'Zero-knowledge document verification system combining local privacy filters with LLM semantic verification.',
    content: `# ETH.id - Zero-Knowledge Document Verification

## Overview
Production-ready CLI that combines Zero-Knowledge Proofs with LLMs to answer yes/no questions about documents without exposing content.

**Core Innovation**: Documents never leave user's machine. Only minimal, claim-relevant data is processed.

## Status
✅ **Production Ready**
- 45 Tests: 100% passing
- 7 Core Modules
- 3 LLM Providers: Claude, OpenAI, Ollama
- 6 Claim Types
- 3 Privacy Modes

## Privacy-First Architecture

### Virtualization Mode (Age Verification)
- Birth date extracted locally
- Age calculated locally
- Only result sent: "Age calculation result: true"
- Birth date NEVER leaves machine

### Hash Partial Mode (CPF Verification)
- CPF masked: \`123.***.***-00\`
- Only first 3 and last 2 digits exposed
- Full CPF never transmitted

### Minimization Mode (Amount Verification)
- Only relevant field extracted
- Unrelated data never sent

## Claim Engine

Natural language → Typed Rust structs:

\`\`\`rust
"maior de 18 anos" → DateClaim { age_threshold: 18 }
"renda acima de 5000" → AmountClaim { threshold: 5000.0 }
"CPF bate com 123.456.789-00" → IdentityClaim { ... }
\`\`\`

## CLI Commands

### Verification
\`\`\`bash
# Age verification
eth verify --doc passport.pdf --claim "over 18 years old"

# CPF verification
eth verify --doc id.pdf --claim "CPF bate com 123.456.789-00"

# Income verification
eth verify --doc income.pdf --claim "renda acima de 5000"

# With attestation
eth verify --doc id.pdf --claim "over 21" --attest

# Offline mode
eth verify --doc id.pdf --claim "over 18" --offline --provider ollama
\`\`\`

### Attestation
\`\`\`bash
# View attestation
eth attest --session <session-id>
\`\`\`

### Audit
\`\`\`bash
# List all verifications
eth audit --list

# Show specific session
eth audit --show <session-id>
\`\`\`

## Use Cases

### 1. KYC Without Document Upload
**Traditional**: Upload full passport → stored in database
**ETH.id**: Verify "over 18" → only boolean result

### 2. Income Verification
**Traditional**: Submit full pay stub → HR sees all
**ETH.id**: Verify "income > $5000" → only threshold result

### 3. Age-Gated Services
**Traditional**: Show ID → service sees everything
**ETH.id**: Verify "over 21" → only boolean

## Privacy Guarantees

### What is NEVER Sent
For age verification:
- ❌ Birth date
- ❌ Full name
- ❌ Address
- ✅ Only: "Age calculation result: true"

### What is Stored
Audit log contains:
- ✅ SHA-256 hash of document
- ✅ Claim text
- ✅ Boolean result
- ❌ NO document content

## Zero-Knowledge Circuits

### age_check.nr
Proves age > threshold without revealing birth date.

### amount_threshold.nr
Proves amount comparison without revealing exact value.

## Security

**Tested Against**:
- ✅ Prompt injection
- ✅ Privacy filter bypass
- ✅ SQL/XSS injection
- ✅ Template injection
- ✅ Memory safety (Rust guarantees)

## Performance
- Document Parsing: 100-500ms
- Privacy Filtering: 1-10ms
- LLM Verification: 1-3s
- Memory Usage: ~50MB + document size`
  }
]

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-12 border-b border-gray-300 pb-4">
          <h1 className="text-2xl font-normal mb-1">Antonioni Nascimento Oliveira</h1>
          <p className="text-sm text-gray-600 mb-2">London, United Kingdom</p>
          <nav className="flex gap-6 text-sm">
            <a href="#technologies" className="text-blue-600 hover:underline">Technologies I'm Excited About</a>
            <a href="#projects" className="text-blue-600 hover:underline">Cool Stuff</a>
            <a href="#writing" className="text-blue-600 hover:underline">Writing</a>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {/* Projects Section */}
          <section id="projects" className="mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Projects</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="border-l-2 border-gray-300 pl-4">
                  <div className="text-left w-full group">
                    <h3 className="text-lg font-medium text-blue-600 group-hover:underline inline">{project.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{project.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section id="technologies" className="mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Technologies I'm Excited About</h2>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600">Rust</strong> — Memory safety without garbage collection. Building security-critical infrastructure where correctness matters.
              </div>
              <div>
                <strong className="text-blue-600">Post-Quantum Cryptography</strong> — NIST ML-KEM, ML-DSA, SLH-DSA. Preparing for quantum computing threats to current encryption.
              </div>
              <div>
                <strong className="text-blue-600">Zero-Knowledge Proofs</strong> — Noir, Barretenberg, PLONK. Proving statements without revealing underlying data.
              </div>
              <div>
                <strong className="text-blue-600">Tree-sitter</strong> — Incremental parsing for code analysis. Building AST-aware tools for multi-language codebases.
              </div>
              <div>
                <strong className="text-blue-600">LLM Security</strong> — Taint tracking, capability firewalls, adversarial testing. Treating LLMs as confusable deputies.
              </div>
              <div>
                <strong className="text-blue-600">Deterministic Systems</strong> — Pure functions, immutable data, reproducible builds. Eliminating non-determinism in critical paths.
              </div>
            </div>
          </section>

          {/* Cool Stuff Section */}
          <section id="cool-stuff" className="mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Cool Stuff</h2>
            <div className="space-y-3 text-sm">
              <div>
                <strong>SWE-Bench</strong> — Autonomous agents solving real GitHub issues. Targeting 25-30% success rate through hybrid search and iterative refinement.
              </div>
              <div>
                <strong>NIST PQC Standards</strong> — Implementing ML-KEM-768, ML-DSA-65, SLH-DSA-128s. First-class support for post-quantum algorithms in ML infrastructure.
              </div>
              <div>
                <strong>Taint Analysis for LLMs</strong> — Tracking data flow through prompt chains. Preventing capability escalation through structural isolation.
              </div>
              <div>
                <strong>Adversarial Testing</strong> — OWASP LLM Top 10 coverage. Automated security testing with 48 attack payloads across 4 categories.
              </div>
              <div>
                <strong>Zero-Knowledge Document Verification</strong> — Answering questions about documents without exposing content. Privacy-preserving KYC.
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section id="writing" className="mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Writing</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Technical documentation and architecture decisions for the projects above.</p>
              <p>Focus areas: distributed systems, cryptography, LLM security, formal methods.</p>
            </div>
          </section>
        </main>

        

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-300 text-sm text-gray-600">
          <div className="flex justify-between items-center">
            <div>
              <a href="mailto:tonixase@gmail.com" className="text-blue-600 hover:underline">tonixase@gmail.com</a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/antonioni/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
