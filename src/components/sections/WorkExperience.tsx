import { Globe, Briefcase, Building2, Users } from 'lucide-react';

export function WorkExperience() {
  const workTypes = [
    {
      id: 'remote',
      title: 'Remote Work',
      icon: Globe,
      metric: '10+',
      metricLabel: 'Years',
      description: 'Leading global teams across time zones',
      gradient: 'gradient-cyan'
    },
    {
      id: 'private',
      title: 'Private Sector',
      icon: Briefcase,
      metric: '4',
      metricLabel: 'Companies',
      description: 'Fortune 500 to innovative startups',
      gradient: 'gradient-blue'
    },
    {
      id: 'public',
      title: 'Public Sector',
      icon: Building2,
      metric: '1',
      metricLabel: 'Institution',
      description: 'EU Parliament & Government Operations',
      gradient: 'gradient-purple'
    },
    {
      id: 'multinational',
      title: 'Multinational Teams',
      icon: Users,
      metric: '12+',
      metricLabel: 'Countries',
      description: 'Cross-cultural leadership & collaboration',
      gradient: 'gradient-green'
    }
  ];

  const getGradientClass = (gradient: string): string => {
    const map: Record<string, string> = {
      'gradient-cyan': 'bg-gradient-cyan',
      'gradient-blue': 'bg-gradient-blue',
      'gradient-purple': 'bg-gradient-purple',
      'gradient-green': 'bg-gradient-green'
    };
    return map[gradient] || 'bg-gradient-blue';
  };

  return (
    <section id="work-experience" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-orange flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">Work Experience</h2>
          <p className="text-gray-600">Diverse experience across industries and contexts</p>
        </div>
      </div>

      {/* Work Types Grid - 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workTypes.map((work) => {
          const IconComponent = work.icon;
          const gradientClass = getGradientClass(work.gradient);

          return (
            <div
              key={work.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Box */}
              <div className={`${gradientClass} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{work.title}</h3>
              <p className="text-sm text-gray-600 mb-6">{work.description}</p>

              {/* Metric */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                  {work.metricLabel}
                </p>
                <p className="text-2xl font-bold text-accent-blue">{work.metric}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
