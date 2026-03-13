import { useEffect, useState } from 'react';

export function Header() {
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
        isScrolled ? 'backdrop-blur-sm bg-white/80 shadow-sm' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-center gap-6 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm">
          <span className="text-sm font-medium text-accent-blue">
            Marcela Gleixner
          </span>
        </div>
      </div>
    </header>
  );
}
