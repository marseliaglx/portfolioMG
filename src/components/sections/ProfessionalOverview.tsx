import { Lightbulb } from 'lucide-react';

export function ProfessionalOverview() {
  const highlights = [
    {
      icon: '🏢',
      title: 'Product Management',
      description: 'Top-tier Microsoft Product',
      metric: 'Led strategic initiatives'
    },
    {
      icon: '📱',
      title: 'Content Creation',
      description: '30K YouTube Subscribers',
      metric: 'Tech education channel'
    },
    {
      icon: '👥',
      title: 'User Impact',
      description: '50K+ Active Users',
      metric: 'Across deployed applications'
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: '$200K Annual Savings',
      metric: 'System architecture redesign'
    }
  ];

  return (
    <section id="executive-brief" className="py-20 bg-gradient-to-br from-accent-blue to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-start gap-4 mb-12">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <div>
            <span className="text-sm font-semibold text-white/70 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-white/70"></span>
              Key Impact Highlights
            </span>
            <h2 className="text-4xl font-space-grotesk font-bold mb-2">Making an Impact That Matters</h2>
            <p className="text-xl text-white/80">Quantifiable achievements across my career</p>
          </div>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-2xl font-space-grotesk font-bold mb-2">{highlight.metric}</h3>
              <p className="text-white/80 mb-1">{highlight.title}</p>
              <p className="text-sm text-white/60">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
