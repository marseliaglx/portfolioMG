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
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium',
        {
          'bg-blue-100 text-accent-blue border border-blue-200': variant === 'default',
          'border border-gray-200 text-gray-700': variant === 'outline',
          'bg-gray-100 text-gray-600': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
