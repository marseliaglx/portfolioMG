import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, interactive = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6',
        'transition-all duration-300',
        interactive && 'cursor-pointer hover:border-neon-magenta/50 hover:bg-white/10 hover:shadow-lg hover:shadow-neon-magenta/10',
        className
      )}
    >
      {children}
    </div>
  );
}
