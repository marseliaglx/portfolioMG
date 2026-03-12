import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center',
        {
          'px-6 py-3 text-base': size === 'md',
          'px-4 py-2 text-sm': size === 'sm',
          'px-8 py-4 text-lg': size === 'lg',
          'bg-neon-magenta hover:bg-neon-magenta/90 text-black hover:shadow-lg hover:shadow-neon-magenta/50': variant === 'primary',
          'border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10': variant === 'secondary',
          'text-gray-300 hover:text-white hover:bg-white/10': variant === 'ghost',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
