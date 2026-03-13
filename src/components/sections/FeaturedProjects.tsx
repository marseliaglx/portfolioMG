import { Zap, Code, Layers } from 'lucide-react';

export function FeaturedProjects() {
  const projects = [
    {
      id: 'analytics',
      title: 'Real-time Analytics Platform',
      description: 'Enterprise-grade analytics system processing 100M+ data points daily',
      icon: Zap,
      gradient: 'gradient-green',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
      color: 'green'
    },
    {
      id: 'ai-review',
      title: 'AI Code Review Engine',
      description: 'Intelligent code review system with ML-powered suggestions and quality metrics',
      icon: Code,
      gradient: 'gradient-purple',
      tech: ['TypeScript', 'LLMs', 'Python', 'FastAPI'],
      color: 'purple'
    },
    {
      id: 'microservices',
      title: 'Microservices Architecture',
      description: 'Scalable microservices framework supporting global operations',
      icon: Layers,
      gradient: 'gradient-orange',
      tech: ['Kubernetes', 'Docker', 'gRPC', 'Service Mesh'],
      color: 'orange'
    }
  ];

  const getGradientClass = (gradient: string): string => {
    const map: Record<string, string> = {
      'gradient-green': 'bg-gradient-green',
      'gradient-purple': 'bg-gradient-purple',
      'gradient-orange': 'bg-gradient-orange'
    };
    return map[gradient] || 'bg-gradient-blue';
  };

  const getTextColorClass = (color: string): string => {
    const map: Record<string, string> = {
      'green': 'text-accent-green',
      'purple': 'text-accent-purple',
      'orange': 'text-accent-orange'
    };
    return map[color] || 'text-accent-blue';
  };

  return (
    <section id="featured-projects" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-cyan flex items-center justify-center flex-shrink-0">
          <Code className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">Featured Projects</h2>
          <p className="text-gray-600">Showcase of key implementations and innovations</p>
        </div>
      </div>

      {/* Projects Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => {
          const IconComponent = project.icon;
          const gradientClass = getGradientClass(project.gradient);
          const textColorClass = getTextColorClass(project.color);

          return (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              {/* Project Icon Header */}
              <div className={`${gradientClass} p-6 flex items-center justify-center`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${textColorClass} mb-2`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <button className={`mt-6 w-full py-2 rounded-lg font-semibold ${textColorClass} hover:bg-gray-50 transition-colors duration-200`}>
                  View Project →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
