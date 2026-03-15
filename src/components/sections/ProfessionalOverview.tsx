import { ArrowUpRight, Brain, BriefcaseBusiness, Sparkles, Target, Users2 } from 'lucide-react';

const executivePillars = [
  {
    icon: Brain,
    title: 'AI + Knowledge Systems',
    summary: 'Turn fragmented content ecosystems into AI-ready knowledge operations.'
  },
  {
    icon: Users2,
    title: 'Executive Stakeholder Alignment',
    summary: 'Align product, support, operations, and leadership around measurable outcomes.'
  },
  {
    icon: Target,
    title: 'Operational Impact',
    summary: 'Design governance and delivery models that improve scale, quality, and cost efficiency.'
  }
];

const impactSignals = [
  { label: 'Users Impacted', value: '100M+' },
  { label: 'Years Leading Programs', value: '15+' },
  { label: 'Global Stakeholders', value: '70+' },
  { label: 'Organizations', value: '5' }
];

export function ProfessionalOverview() {
  return (
    <section
      id="professional-overview"
      className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/20 border border-cyan-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 mb-6">
              <Sparkles className="w-4 h-4" />
              Executive Overview
            </div>

            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold leading-tight mb-5">
              I build knowledge ecosystems that make AI useful, measurable, and scalable.
            </h2>

            <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">
              I partner with executive and cross-functional teams to convert complex information environments into high-performing
              knowledge operations. The result: stronger customer self-service, faster support resolution, and better business resilience.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              {['AI Content Strategy', 'Knowledge Operations', 'Program Leadership'].map((track) => (
                <span
                  key={track}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-slate-100"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
                  {track}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {executivePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="group rounded-2xl border border-white/20 bg-white/5 p-6 hover:bg-white/10 hover:border-cyan-300/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-300/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan-200" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-slate-200/90 leading-relaxed">{pillar.summary}</p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="rounded-2xl border border-indigo-300/30 bg-indigo-400/10 p-5 flex items-start gap-3">
              <BriefcaseBusiness className="w-5 h-5 mt-0.5 text-indigo-200 flex-shrink-0" />
              <p className="text-sm md:text-base text-indigo-50 leading-relaxed">
                Ideal for teams hiring a leader who can bridge <strong className="font-semibold">strategy + execution</strong> across content,
                AI readiness, and operational transformation.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactSignals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-center hover:bg-white/10 transition-colors"
            >
              <p className="text-2xl md:text-3xl font-space-grotesk font-bold text-cyan-200">{signal.value}</p>
              <p className="text-xs md:text-sm text-slate-300 mt-1">{signal.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
