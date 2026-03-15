export function ExecutiveBrief() {
  return (
    <section id="executive-brief" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-blue">Executive Brief</p>
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gray-900">How I drive measurable knowledge outcomes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I align AI enablement, scalable knowledge operations, and cross-functional leadership to reduce support friction,
            strengthen product adoption, and protect recurring revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-accent-blue">35%</p>
            <p className="text-gray-700 mt-2">Reduction in support ticket volume through self-service optimization and governance.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-accent-cyan">$4.2M</p>
            <p className="text-gray-700 mt-2">Annualized cost savings from knowledge lifecycle redesign and content operations automation.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-accent-purple">22 pts</p>
            <p className="text-gray-700 mt-2">Improvement in CSAT after launching AI-ready help journeys and stakeholder playbooks.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-space-grotesk font-semibold text-gray-900 mb-6">Capability pillars</h3>
          <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
            <li className="border border-slate-200 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2">AI Readiness</p>
              <p>Operationalizing trustworthy content frameworks for LLM and agent-assisted experiences.</p>
            </li>
            <li className="border border-slate-200 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Knowledge Ops</p>
              <p>Designing governance, taxonomy, and publishing systems that scale globally across teams.</p>
            </li>
            <li className="border border-slate-200 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Leadership</p>
              <p>Driving executive alignment, change management, and cross-functional execution in complex organizations.</p>
            </li>
          </ul>

          <p className="mt-8 text-gray-600">
            <span className="font-semibold text-gray-900">Best-fit roles:</span> Senior Content Program Manager, AI Knowledge Strategy Lead, Director of Knowledge Operations.
          </p>
        </div>
      </div>
    </section>
  );
}
