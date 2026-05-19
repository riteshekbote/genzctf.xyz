export default function IDORLearningPortal() {
  const phases = [
    {
      title: 'Phase 1 — Recon & Mapping',
      icon: '🛰️',
      summary: 'Discover APIs, IDs, hidden endpoints, and leaked object references.',
      color: 'from-cyan-500 to-blue-500',
      bullets: [
        'Create attacker/victim accounts',
        'Map REST, GraphQL, WebSocket, gRPC endpoints',
        'Look for leaked IDs in public pages and mobile apps',
        'Analyze Swagger/OpenAPI docs and APKs',
      ],
    },
    {
      title: 'Phase 2 — ID Manipulation',
      icon: '🧩',
      summary: 'Swap, enumerate, brute-force, and mutate object identifiers.',
      color: 'from-purple-500 to-fuchsia-500',
      bullets: [
        'Numeric ID increment/decrement',
        'UUID/email/username replacement',
        'Hash-derived ID testing',
        'Partial UUID brute force',
      ],
    },
    {
      title: 'Phase 3 — Bypass Tricks',
      icon: '🚪',
      summary: 'Confuse routers, parsers, and filters using path tricks.',
      color: 'from-orange-500 to-red-500',
      bullets: [
        'Trailing slashes and path normalization',
        'Case variation attacks',
        'Mixed traversal sequences',
        'HTTP parameter pollution',
      ],
    },
    {
      title: 'Phase 4 — Logic Abuse',
      icon: '🧠',
      summary: 'Exploit authorization flaws and business logic mismatches.',
      color: 'from-green-500 to-emerald-500',
      bullets: [
        'Role caching bypasses',
        'Frontend/backend desync',
        'Token binding flaws',
        'Version downgrade testing',
      ],
    },
    {
      title: 'Phase 5 — Serialization & Protocols',
      icon: '📡',
      summary: 'Abuse alternate protocols, nested objects, and deserialization.',
      color: 'from-indigo-500 to-violet-500',
      bullets: [
        'JSON object wrapping',
        'gRPC/protobuf mutation',
        'GraphQL object replacement',
        'WebSocket channel hijacking',
      ],
    },
  ];

  const advancedMethods = [
    {
      title: 'AI-Assisted Endpoint Discovery',
      detail:
        'Use LLMs to classify endpoint sensitivity, predict hidden routes, and generate fuzzing payloads based on naming conventions.',
    },
    {
      title: 'Shadow API Enumeration',
      detail:
        'Search CDN logs, JS bundles, source maps, and archived endpoints to discover undocumented APIs.',
    },
    {
      title: 'Event-Driven IDOR Testing',
      detail:
        'Observe Kafka, SSE, or queue-backed event systems for leaked identifiers and unauthorized subscriptions.',
    },
    {
      title: 'Cloud Storage Reference Abuse',
      detail:
        'Test predictable S3/GCS blob references, signed URLs, export jobs, and object key reuse.',
    },
    {
      title: 'Multi-Tenant Boundary Testing',
      detail:
        'Switch org_id, tenant_id, workspace_id, or team_id to test horizontal isolation failures.',
    },
    {
      title: 'Batch GraphQL Mutation Abuse',
      detail:
        'Chain multiple object mutations in one request to identify authorization gaps inside nested resolvers.',
    },
    {
      title: 'Cache Poisoning + IDOR',
      detail:
        'Attempt to cache privileged responses and retrieve them from less privileged sessions.',
    },
    {
      title: 'Signed URL Replay',
      detail:
        'Reuse expired or cross-account signed URLs to validate ownership binding and expiry enforcement.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_40%)]" />

      <header className="relative z-10 px-8 py-14 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-cyan-400/40 px-4 py-1 text-sm bg-cyan-500/10 mb-6">
            Interactive Offensive Security Learning Portal
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-5xl">
            3D IDOR Testing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Visualization Website
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-300 max-w-3xl leading-relaxed">
            An immersive educational platform for understanding Insecure Direct Object Reference testing flows, advanced bypasses, protocol attacks, and modern API authorization weaknesses.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:scale-105 transition-transform font-semibold shadow-2xl shadow-cyan-500/30">
              Explore Attack Flow
            </button>

            <button className="px-6 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
              Open Visualization Lab
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <section>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold">Attack Lifecycle</h2>
              <p className="text-zinc-400 mt-2">
                Move through reconnaissance, manipulation, bypassing, and protocol exploitation.
              </p>
            </div>

            <div className="hidden md:flex gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-150" />
              <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse delay-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="group relative rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${phase.color}`}
                  style={{ filter: 'blur(100px)' }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-5xl">{phase.icon}</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                      Module {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>

                  <p className="text-zinc-300 leading-relaxed mb-6">
                    {phase.summary}
                  </p>

                  <div className="space-y-3">
                    {phase.bullets.map((bullet, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl bg-black/30 border border-white/5 px-4 py-3"
                      >
                        <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-sm text-zinc-200">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex px-4 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-sm mb-5">
                Advanced Methods Added
              </div>

              <h2 className="text-4xl font-bold leading-tight">
                Modern IDOR Attack Surface Expansion
              </h2>

              <p className="mt-5 text-zinc-300 leading-relaxed text-lg">
                Beyond classic REST endpoint manipulation, modern systems expose authorization flaws through distributed systems, mobile APIs, real-time channels, AI-assisted interfaces, and cloud-native infrastructure.
              </p>
            </div>

            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(34,211,238,0.35),transparent_60%)]" />

              <div className="relative z-10 space-y-5">
                {advancedMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>

                      <h3 className="text-lg font-semibold">{method.title}</h3>
                    </div>

                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {method.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-28">
          <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-black leading-tight">
                  Suggested Interactive 3D Features
                </h2>

                <div className="mt-8 space-y-4">
                  {[
                    '3D API request flow visualizer',
                    'Animated authorization bypass simulation',
                    'GraphQL query mutation playground',
                    'Live WebSocket channel subscription demo',
                    'Token swapping simulator',
                    'Timeline-based TOCTOU race visualization',
                    'Attack path heatmaps',
                    'Interactive multi-tenant boundary tester',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-zinc-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[500px] rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_60%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-72 h-72">
                    <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin" style={{ animationDuration: '20s' }} />
                    <div className="absolute inset-8 rounded-full border border-purple-400/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                    <div className="absolute inset-16 rounded-full border border-pink-400/30 animate-spin" style={{ animationDuration: '10s' }} />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500 rotate-12 shadow-2xl shadow-cyan-500/30 flex items-center justify-center text-2xl font-black">
                        IDOR
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-sm text-zinc-300">
                    <span>Simulation Status</span>
                    <span className="text-cyan-400">Authorization Drift Detected</span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-8 py-8 text-center text-zinc-500 text-sm">
        Educational security visualization portal for learning secure authorization design and modern API attack surfaces.
      </footer>
    </div>
  );
}
