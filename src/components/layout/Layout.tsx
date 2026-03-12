import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import { ModalProvider } from '../../context/ModalContext';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <ModalProvider>
        <div className="relative min-h-screen bg-black">
          <div className="bg-effects" />
          <Header />
          <main className="relative z-10 max-w-7xl mx-auto px-4 py-20">
            {children}
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
}
