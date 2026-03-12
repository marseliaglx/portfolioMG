import type { ExperienceEntry } from '../../types';
import { Badge } from '../common/Badge';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceModalContentProps {
  experience: ExperienceEntry;
}

export function ExperienceModalContent({ experience }: ExperienceModalContentProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-4xl font-bold text-white mb-4 font-space-grotesk">
          {experience.title}
        </h3>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <Badge variant="default">{experience.company}</Badge>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            {experience.location}
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            {experience.dateRange.start} - {experience.dateRange.end}
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h4 className="text-lg font-semibold text-neon-cyan mb-3">Mandate</h4>
        <p className="text-gray-300 leading-relaxed">{experience.mandate}</p>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="text-lg font-semibold text-neon-magenta mb-4">Key Achievements</h4>
        <ul className="space-y-3">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex gap-3 text-gray-300">
              <span className="text-neon-cyan flex-shrink-0 mt-1">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Metrics */}
      {experience.metrics && (
        <div>
          <h4 className="text-lg font-semibold text-neon-purple mb-4">Impact Metrics</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {experience.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="text-2xl font-bold text-neon-magenta">{metric.value}</div>
                <div className="text-sm text-gray-400 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
