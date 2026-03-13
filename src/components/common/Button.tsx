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
          'bg-gradient-to-r from-accent-blue to-blue-600 hover:from-accent-blue hover:to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/30': variant === 'primary',
          'border-2 border-gray-200 text-gray-700 hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50': variant === 'secondary',
          'text-gray-600 hover:text-accent-blue hover:bg-blue-50': variant === 'ghost',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
