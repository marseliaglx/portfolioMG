import { Heart, Users, Zap } from 'lucide-react';

export function DEILeadership() {
  const deiInitiatives = [
    {
      id: 'mentorship',
      title: 'Mentorship Program',
      description: 'Leading mentoring initiatives for underrepresented professionals in tech and knowledge management fields. Actively mentor junior and mid-career professionals globally.',
      icon: Heart,
      metrics: '15+ mentees',
      gradient: 'gradient-pink'
    },
    {
      id: 'diversity',
      title: 'Diversity Advocate',
      description: 'Champion for inclusive hiring practices, diverse team composition, and equitable advancement opportunities. Advocate for multilingual and multicultural perspectives.',
      icon: Users,
      metrics: '5 organizations',
      gradient: 'gradient-pink'
    },
    {
      id: 'community',
      title: 'Community Builder',
      description: 'Building inclusive communities of practice across global organizations. Focus on psychological safety, belonging, and equitable access to opportunities.',
      icon: Zap,
      metrics: '70+ stakeholders',
      gradient: 'gradient-pink'
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Inclusion',
      description: 'Designing content and systems with accessibility first. Ensuring knowledge systems serve diverse user abilities and language backgrounds.',
      icon: Heart,
      metrics: '100M+ users',
      gradient: 'gradient-pink'
    }
  ];

  return (
    <section id="dei-leadership" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-pink flex items-center justify-center flex-shrink-0">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">DEI Leadership</h2>
          <p className="text-gray-600">Commitment to diversity, equity, and inclusion initiatives</p>
        </div>
      </div>

      {/* DEI Initiatives Grid - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deiInitiatives.map((initiative) => {
          const IconComponent = initiative.icon;

          return (
            <div
              key={initiative.id}
              className="bg-white border border-pink-200 rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-pink flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{initiative.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {initiative.description}
              </p>

              {/* Metric */}
              <div className="pt-4 border-t border-pink-200">
                <p className="text-sm text-gray-600 mb-1">Impact Reach</p>
                <p className="text-lg font-bold text-accent-pink">{initiative.metrics}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* DEI Summary Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 bg-pink-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Creating inclusive environments where diverse perspectives drive innovation. Building knowledge systems that serve everyone equally, regardless of background, ability, or identity.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Mentees</p>
            <p className="text-2xl font-bold text-accent-pink">15+</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Organizations</p>
            <p className="text-2xl font-bold text-accent-pink">5</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Initiatives</p>
            <p className="text-2xl font-bold text-accent-pink">{deiInitiatives.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Global Reach</p>
            <p className="text-2xl font-bold text-accent-pink">12+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
