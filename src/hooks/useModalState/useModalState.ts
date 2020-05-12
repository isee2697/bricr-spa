import { useContext } from 'react';

import { ModalContext } from 'context/modal/modalContext/ModalContext';
import { ModalStateType } from 'context/modal/modalContext/ModalContext.types';

export const useModalState = (id: string) => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalState must be used within an ModalContextController');
  }

  return context.modalsState.find((modalState: ModalStateType) => modalState.id === id)?.isOpen || false;
};
