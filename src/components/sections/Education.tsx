import { BookOpen, Award } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      id: 'masters',
      degree: 'Master\'s in Information Science',
      university: 'University of Pittsburgh',
      gpa: '3.8/4.0',
      years: '2012 - 2014',
      focus: 'Knowledge Management & Information Architecture'
    },
    {
      id: 'bachelor',
      degree: 'Bachelor\'s in Business Administration',
      university: 'University of Vienna',
      gpa: '3.9/4.0',
      years: '2008 - 2012',
      focus: 'Business Strategy & Organizational Management'
    },
    {
      id: 'kcs',
      degree: 'KCS Practitioner Level 3',
      university: 'Knowledge Centered Service',
      gpa: 'Certified',
      years: '2017 - 2024',
      focus: 'Process Design & Continuous Improvement'
    },
    {
      id: 'itil',
      degree: 'ITIL 4 Foundation',
      university: 'AXELOS',
      gpa: 'Certified',
      years: '2020 - 2024',
      focus: 'IT Service Management'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-blue flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">Education</h2>
          <p className="text-gray-600">Degrees, certifications, and continuous learning</p>
        </div>
      </div>

      {/* Education Grid - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-blue-50 rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-gray-600 font-medium">{edu.university}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Focus Area */}
            <p className="text-sm text-gray-600 mb-4 pb-4 border-b border-blue-200">
              {edu.focus}
            </p>

            {/* Card Footer */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-gray-500 mb-1">GPA / Status</p>
                <p className="text-accent-blue font-semibold">{edu.gpa}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Timeline</p>
                <p className="text-accent-blue font-semibold">{edu.years}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
