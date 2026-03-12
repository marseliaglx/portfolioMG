import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common/Button';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-white/5' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-center gap-6 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
          <span className="text-sm font-medium text-gray-300">
            {theme === 'professional' ? 'Professional' : 'Nerdy'} Mode
          </span>
          <Button
            onClick={toggleTheme}
            variant="secondary"
            size="sm"
            className="!rounded-full"
          >
            {theme === 'professional' ? '🎭' : '🤖'} Switch
          </Button>
        </div>
      </div>
    </header>
  );
}
