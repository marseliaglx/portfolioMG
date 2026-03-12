import { cn } from '../../utils/cn';

interface BentoCardProps {
  children: React.ReactNode;
  size?: 'regular' | 'wide' | 'tall' | 'large';
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export function BentoCard({ children, size = 'regular', className, interactive = false, onClick }: BentoCardProps) {
  const sizeClasses = {
    regular: 'col-span-1 row-span-1',
    wide: 'col-span-2 row-span-1',
    tall: 'col-span-1 row-span-2',
    large: 'col-span-2 row-span-2',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        sizeClasses[size],
        'rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8',
        'transition-all duration-300 flex flex-col justify-between',
        interactive && 'cursor-pointer hover:border-neon-magenta/50 hover:bg-white/15 hover:shadow-lg hover:shadow-neon-magenta/20',
        'min-h-64',
        className
      )}
    >
      {children}
    </div>
  );
}
