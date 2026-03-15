import { contactInfo } from '../../data';
import { Button } from '../common/Button';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-gray-200 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact</h4>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 hover:text-accent-blue transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {contactInfo.email}
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Connect</h4>
            <div className="flex gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {contactInfo.blog && (
                <a
                  href={contactInfo.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent-blue transition-colors"
                >
                  Blog
                </a>
              )}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Let's Talk</h4>
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.href = `mailto:${contactInfo.email}`}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Marcela Gleixner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
