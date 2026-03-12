import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        {
          'bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/30': variant === 'default',
          'border border-gray-400 text-gray-300': variant === 'outline',
          'bg-gray-700/50 text-gray-200': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
