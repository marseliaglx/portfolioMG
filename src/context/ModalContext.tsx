import React, { createContext, useContext, useState } from 'react';

export type ModalType = 'experience' | 'skills' | 'education' | 'achievements' | 'contact';

interface ModalState {
  isOpen: boolean;
  type: ModalType | null;
  data: Record<string, any> | null;
}

interface ModalContextType {
  modal: ModalState;
  openModal: (type: ModalType, data?: Record<string, any>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: null,
    data: null,
  });

  const openModal = (type: ModalType, data?: Record<string, any>) => {
    setModal({
      isOpen: true,
      type,
      data: data || null,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      type: null,
      data: null,
    });
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
