import { Star, MessageSquare } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'Marcela\'s strategic approach to content governance completely transformed how we manage knowledge across our organization. Her ability to align stakeholders and drive execution is exceptional.',
      author: 'Sarah Chen',
      title: 'VP of Product, Enterprise AI Division',
      rating: 5,
      company: 'Microsoft'
    },
    {
      id: 'testimonial-2',
      quote: 'Working with Marcela on the Copilot readiness initiative was a game-changer. She not only understood the technical requirements but also managed complex stakeholder dynamics with grace and clarity.',
      author: 'James Mitchell',
      title: 'Engineering Director, Cloud Services',
      rating: 5,
      company: 'Microsoft'
    },
    {
      id: 'testimonial-3',
      quote: 'Her expertise in knowledge architecture and process design brought structure to our chaotic support operations. The impact on cost reduction and customer satisfaction was immediate and measurable.',
      author: 'Elena Rodriguez',
      title: 'Head of Customer Success',
      rating: 5,
      company: 'Electronic Arts'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-accent-orange text-accent-orange' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-white">
      {/* Section Header with Icon Box */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-gradient-pink flex items-center justify-center flex-shrink-0">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900">Testimonials</h2>
          <p className="text-gray-600">What colleagues and leaders say about working together</p>
        </div>
      </div>

      {/* Testimonials Grid - 2-3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
          >
            {/* Star Rating */}
            <div className="mb-4">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Quote */}
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
              <p className="text-xs text-accent-blue font-medium mt-1">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
