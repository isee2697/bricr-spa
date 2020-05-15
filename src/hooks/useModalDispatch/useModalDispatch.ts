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
      // @TODO move it to useReducer in context
      context.setModalsState(state => {
        const index = state.findIndex((modalState: ModalStateType) => modalState.id === id);

        if (index !== -1) {
          const newState = [...state];
          newState[index] = { id: id, isOpen: true };

          return newState;
        } else {
          return [...state, { id: id, isOpen: true }];
        }
      });
    },
    [context],
  );

  const close = useCallback(
    // @TODO move it to useReducer in context

    (id: string) => {
      context.setModalsState(state => {
        const index = state.findIndex((modalState: ModalStateType) => modalState.id === id);

        if (index !== -1) {
          const newState = [...state];
          newState[index] = { id: id, isOpen: false };

          return newState;
        } else {
          return [...state, { id: id, isOpen: false }];
        }
      });
    },
    [context],
  );

  return {
    open,
    close,
  };
};
