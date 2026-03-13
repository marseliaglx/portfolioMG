import { Award, Cloud, Shield, BarChart3 } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      id: 'kcs',
      name: 'KCS Practitioner',
      issuer: 'Knowledge Centered Service',
      date: '2024',
      icon: Shield,
      gradient: 'gradient-blue'
    },
    {
      id: 'itil',
      name: 'ITIL 4 Foundation',
      issuer: 'AXELOS',
      date: '2024',
      icon: BarChart3,
      gradient: 'gradient-purple'
    },
    {
      id: 'cxm',
      name: 'Customer Experience Management',
      issuer: 'ServiceNow University',
      date: '2024',
      icon: Award,
      gradient: 'gradient-cyan'
    },
    {
      id: 'analytics',
      name: 'Advanced Analytics',
      issuer: 'Google Analytics Academy',
      date: '2024',
      icon: BarChart3,
      gradient: 'gradient-orange'
    },
    {
      id: 'pmp',
      name: 'Project Management Professional',
      issuer: 'Project Management Institute',
      date: '2024',
      icon: Shield,
      gradient: 'gradient-green'
    },
    {
      id: 'uxcontent',
      name: 'UX Content Strategy',
      issuer: 'Nielsen Norman Group',
      date: '2024',
      icon: Cloud,
      gradient: 'gradient-pink'
    }
  ];

  const getGradientClass = (gradient: string) => {
    const gradientMap: Record<string, string> = {
      'gradient-blue': 'bg-gradient-blue',
      'gradient-purple': 'bg-gradient-purple',
      'gradient-cyan': 'bg-gradient-cyan',
      'gradient-orange': 'bg-gradient-orange',
      'gradient-green': 'bg-gradient-green',
      'gradient-pink': 'bg-gradient-pink'
    };
    return gradientMap[gradient] || 'bg-gradient-blue';
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-purple flex items-center justify-center flex-shrink-0">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">Certifications</h2>
          <p className="text-gray-600">Professional credentials and continuous learning</p>
        </div>
      </div>

      {/* Certifications Grid - Horizontal badges/cards layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => {
          const IconComponent = cert.icon;
          const gradientClass = getGradientClass(cert.gradient);

          return (
            <div
              key={cert.id}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Box */}
              <div className={`w-12 h-12 rounded-lg ${gradientClass} flex items-center justify-center flex-shrink-0`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 mb-1 truncate">{cert.name}</h3>
                <p className="text-xs text-gray-600 mb-2 truncate">{cert.issuer}</p>
                <p className="text-xs font-semibold text-accent-purple">{cert.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Certification Count */}
      <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Active Certifications</p>
          <p className="text-3xl font-bold text-accent-purple">{certifications.length}</p>
        </div>
      </div>
    </section>
  );
}
