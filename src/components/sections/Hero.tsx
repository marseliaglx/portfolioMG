import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { contactInfo } from '../../data';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 py-20 bg-white">
      <Badge variant="default" className="mx-auto bg-blue-100 text-accent-blue border-blue-200">
        ✦ Open to AI Content Strategy & Knowledge Leadership Roles
      </Badge>

      <div>
        <h1 className="text-6xl md:text-7xl font-space-grotesk font-bold text-gray-900 mb-4">
          Marcela Gleixner
        </h1>

        <p className="text-xl md:text-2xl text-accent-blue font-semibold mb-6">
          Senior Content Program Manager · AI & Knowledge Operations
        </p>
      </div>

      <p className="max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
        I step into complex environments where knowledge is fragmented, AI readiness is unclear, and self-service isn't reducing operational cost. I establish governance, align stakeholders, and build scalable knowledge systems that empower customers and protect revenue.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <a href="#executive-brief">
          <Button variant="primary" size="lg">
            Open Executive Brief
          </Button>
        </a>
        <a href="#experience">
          <Button variant="secondary" size="lg">
            See My Work
          </Button>
        </a>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="lg">
            Connect on LinkedIn ↗
          </Button>
        </a>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 pt-16 w-full max-w-2xl">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-accent-blue">100M+</div>
          <div className="text-sm md:text-base text-gray-500 mt-2">Users Reached</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-accent-cyan">15+</div>
          <div className="text-sm md:text-base text-gray-500 mt-2">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-accent-purple">5</div>
          <div className="text-sm md:text-base text-gray-500 mt-2">Organizations</div>
        </div>
      </div>
    </section>
  );
}
