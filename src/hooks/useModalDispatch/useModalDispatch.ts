import { useCallback, useContext } from 'react';

import { ModalContext } from 'context/modal/modalContext/ModalContext';
import { ModalStateType } from 'context/modal/modalContext/ModalContext.types';

export const useModalDispatch = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalDispatch must be used within an ModalContextController');
  }

  const open = useCallback(
    (id: string) => {
      context.setModalsState([
        ...((context.modalsState.find((modalState: ModalStateType) => modalState.id !== id) || []) as ModalStateType[]),
        { id: id, isOpen: true },
      ]);
    },
    [context],
  );

  const close = (id: string) => {
    context.setModalsState([
      ...((context.modalsState.find((modalState: ModalStateType) => modalState.id !== id) || []) as ModalStateType[]),
      { id: id, isOpen: false },
    ]);
  };

  return {
    open,
    close,
  };
};
