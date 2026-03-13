import { TrendingUp, Award, Users } from 'lucide-react';

export function CareerProgression() {
  const progressionStages = [
    {
      id: 'junior',
      title: 'Junior Developer',
      years: '2010-2012',
      icon: TrendingUp,
      metrics: [
        { label: 'Projects', value: '10+' },
        { label: 'Team Size', value: '1-3' }
      ]
    },
    {
      id: 'senior',
      title: 'Senior Specialist',
      years: '2013-2018',
      icon: Award,
      metrics: [
        { label: 'Impact Scale', value: '50M+' },
        { label: 'Team Size', value: '5-15' }
      ]
    },
    {
      id: 'manager',
      title: 'Program Manager & Leader',
      years: '2019-Present',
      icon: Users,
      metrics: [
        { label: 'Users Reached', value: '100M+' },
        { label: 'Stakeholders', value: '70+' }
      ]
    }
  ];

  return (
    <section id="career-progression" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-cyan flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">Career Progression</h2>
          <p className="text-gray-600">15+ years of growth, impact, and leadership</p>
        </div>
      </div>

      {/* Timeline - Horizontal layout */}
      <div className="relative">
        {/* Timeline Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {progressionStages.map((stage, index) => {
            const IconComponent = stage.icon;

            return (
              <div key={stage.id} className="relative">
                {/* Timeline Connector (for desktop) */}
                {index < progressionStages.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%)] w-8 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple" />
                )}

                {/* Stage Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-300">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-blue flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-accent-blue bg-blue-50 px-3 py-1 rounded-full">
                      {stage.years}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{stage.title}</h3>

                  {/* Metrics */}
                  <div className="space-y-3">
                    {stage.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                        <p className="text-lg font-bold text-accent-cyan">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-3 gap-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Career Span</p>
          <p className="text-2xl font-bold text-accent-blue">15+</p>
          <p className="text-xs text-gray-600 mt-1">Years</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Organizations</p>
          <p className="text-2xl font-bold text-accent-purple">5</p>
          <p className="text-xs text-gray-600 mt-1">Companies</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Global Impact</p>
          <p className="text-2xl font-bold text-accent-green">100M+</p>
          <p className="text-xs text-gray-600 mt-1">Users</p>
        </div>
      </div>
    </section>
  );
}
