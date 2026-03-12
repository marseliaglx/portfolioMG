import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn('mb-8', centered && 'text-center', className)}>
      <h2 className="text-4xl font-bold mb-3 text-white font-space-grotesk">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1 bg-gradient-to-r from-neon-magenta to-neon-cyan mt-4 rounded-full',
        centered ? 'w-16 mx-auto' : 'w-20'
      )} />
    </div>
  );
}
