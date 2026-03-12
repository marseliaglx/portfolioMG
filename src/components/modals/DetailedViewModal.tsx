import { useModal } from '../../context/ModalContext';
import { useTheme } from '../../context/ThemeContext';
import { X } from 'lucide-react';
import type { ExperienceEntry } from '../../types';
import { ExperienceModalContent } from './ExperienceModalContent';

export function DetailedViewModal() {
  const { modal, closeModal } = useModal();
  const { theme } = useTheme();

  if (!modal.isOpen || !modal.type) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={closeModal}
    >
      <div className="min-h-screen py-8 px-4" onClick={(e) => e.stopPropagation()}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-white/5 border-b border-white/10 px-8 py-6 flex items-center justify-between rounded-t-2xl z-10">
              <h2 className="text-3xl font-bold text-white font-space-grotesk">
                {modal.type === 'experience' && (theme === 'professional' ? 'Work Experience' : 'Quest Details')}
                {modal.type === 'skills' && (theme === 'professional' ? 'Skills & Expertise' : 'Abilities')}
                {modal.type === 'education' && (theme === 'professional' ? 'Education' : 'Wisdom')}
                {modal.type === 'achievements' && (theme === 'professional' ? 'Achievements' : 'Legendary Feats')}
                {modal.type === 'contact' && 'Get in Touch'}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {modal.type === 'experience' && modal.data && (
                <ExperienceModalContent experience={modal.data as ExperienceEntry} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
