import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { contactInfo } from '../../data';

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 py-20">
      <Badge variant="default" className="mx-auto">
        {theme === 'professional'
          ? '✦ Open to AI Content Strategy & Knowledge Leadership Roles'
          : '✦ Seeking New Epic Quests'}
      </Badge>

      <div>
        <h1 className="text-6xl md:text-7xl font-space-grotesk font-bold bg-gradient-to-r from-white via-neon-magenta to-neon-cyan bg-clip-text text-transparent mb-4">
          Marcela Gleixner
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          {theme === 'professional'
            ? 'Senior Content Program Manager · AI & Knowledge Operations'
            : 'Knowledge Architect · Grand Master of Systems'}
        </p>
      </div>

      <p className="max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed">
        {theme === 'professional'
          ? 'I step into complex environments where knowledge is fragmented, AI readiness is unclear, and self-service isn\'t reducing operational cost. I establish governance, align stakeholders, and build scalable knowledge systems that empower customers and protect revenue.'
          : 'I enter chaotic digital realms where wisdom is scattered, magical systems unprepared, and quests fail to deflect crisis. I architect governance frameworks, unite fractured armies, and forge knowledge systems that arm citizens and fortify kingdoms.'}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" size="lg">
            Connect on LinkedIn ↗
          </Button>
        </a>
        <a href="#experience">
          <Button variant="secondary" size="lg">
            See My Work
          </Button>
        </a>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 pt-16 w-full max-w-2xl">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-neon-magenta">100M+</div>
          <div className="text-sm md:text-base text-gray-400 mt-2">Users Reached</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-neon-cyan">15+</div>
          <div className="text-sm md:text-base text-gray-400 mt-2">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-neon-purple">5</div>
          <div className="text-sm md:text-base text-gray-400 mt-2">Organizations</div>
        </div>
      </div>
    </section>
  );
}
