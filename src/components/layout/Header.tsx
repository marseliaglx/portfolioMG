import { useEffect, useState } from 'react';
import { Copy, Download, Menu, X } from 'lucide-react';
import { contactInfo } from '../../data';

const navItems = [
  { href: '#executive-brief', label: 'Executive Brief' },
  { href: '#impact-ledger', label: 'Impact Ledger' },
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 py-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur transition-all duration-300 ${
          isScrolled ? 'md:px-6' : 'md:px-8'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="text-sm font-semibold text-accent-blue">
            Marcela Gleixner
          </a>

          <nav className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 transition-colors hover:text-accent-blue"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="/Marcela-Gleixner-Resume.txt"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-accent-blue hover:text-accent-blue"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-blue-600 px-3 py-2 text-sm font-medium text-white transition-all hover:to-blue-700"
            >
              <Copy className="h-4 w-4" />
              {copied ? 'Email Copied!' : 'Copy Email'}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-gray-200 p-2 text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 md:hidden">
            <nav className="grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-700 transition-colors hover:text-accent-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 grid gap-2">
              <a
                href="/Marcela-Gleixner-Resume.txt"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-blue-600 px-3 py-2 text-sm font-medium text-white"
              >
                <Copy className="h-4 w-4" />
                {copied ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
