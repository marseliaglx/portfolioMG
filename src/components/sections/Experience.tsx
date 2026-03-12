import { useTheme } from '../../context/ThemeContext';
import { useModal } from '../../context/ModalContext';
import { experiences } from '../../data';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';

export function Experience() {
  const { theme } = useTheme();
  const { openModal } = useModal();

  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <SectionHeader
        title={theme === 'professional' ? 'Work Experience' : 'Quest History'}
        subtitle="15+ years building scalable knowledge systems across global organizations"
      />

      <div className="grid gap-6">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            interactive
            onClick={() => openModal('experience', exp)}
            className="group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <Badge>{exp.company}</Badge>
                </div>
                <p className="text-gray-400 mb-2">{exp.location}</p>
                <p className="text-gray-300">{exp.description}</p>
                {exp.metrics && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    {exp.metrics.map((metric) => (
                      <div key={metric.label} className="text-sm">
                        <span className="text-neon-magenta font-semibold">{metric.value}</span>
                        <span className="text-gray-400"> {metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-gray-500 text-sm whitespace-nowrap">
                {exp.dateRange.start} - {exp.dateRange.end}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
