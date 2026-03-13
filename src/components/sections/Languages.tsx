import { Globe } from 'lucide-react';

export function Languages() {
  const languages = [
    {
      id: 'english',
      name: 'English',
      level: 'Native',
      proficiency: 100
    },
    {
      id: 'polish',
      name: 'Polish',
      level: 'Native',
      proficiency: 100
    },
    {
      id: 'spanish',
      name: 'Spanish',
      level: 'Fluent',
      proficiency: 85
    },
    {
      id: 'french',
      name: 'French',
      level: 'Intermediate',
      proficiency: 70
    },
    {
      id: 'german',
      name: 'German',
      level: 'Intermediate',
      proficiency: 65
    },
    {
      id: 'mandarin',
      name: 'Mandarin Chinese',
      level: 'Beginner',
      proficiency: 40
    }
  ];

  return (
    <section id="languages" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-cyan flex items-center justify-center flex-shrink-0">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">Languages</h2>
          <p className="text-gray-600">Multilingual capabilities enabling global collaboration</p>
        </div>
      </div>

      {/* Languages List with Progress Bars */}
      <div className="space-y-6">
        {languages.map((language) => (
          <div key={language.id}>
            {/* Language Header */}
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{language.name}</h3>
              <span className="text-sm font-medium text-accent-purple">{language.level}</span>
            </div>

            {/* Progress Bar */}
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-purple rounded-full transition-all duration-500"
                style={{ width: `${language.proficiency}%` }}
              />
            </div>

            {/* Proficiency Percentage */}
            <p className="text-xs text-gray-500 mt-1">{language.proficiency}% Proficiency</p>
          </div>
        ))}
      </div>

      {/* Language Summary */}
      <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-3 gap-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Native</p>
          <p className="text-3xl font-bold text-accent-purple">2</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Fluent</p>
          <p className="text-3xl font-bold text-accent-blue">1</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Total Languages</p>
          <p className="text-3xl font-bold text-accent-cyan">{languages.length}</p>
        </div>
      </div>
    </section>
  );
}
