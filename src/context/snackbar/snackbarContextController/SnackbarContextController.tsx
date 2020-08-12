import React, { useState } from 'react';

import { SnackbarContext } from '../snackbarContext/SnackbarContext';
import { SnackbarStateType } from '../snackbarContext/SnackbarContext.types';

import { SnackbarontextControllerProps } from './SnackbarContextController.types';

export const SnackbarContextController = ({ children }: SnackbarontextControllerProps) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarStateType>({
    isOpen: false,
    props: {
      severity: 'success',
      message: '',
      modalTitle: '',
      modalContent: '',
      onUndo: () => {},
    },
  });

  return <SnackbarContext.Provider value={{ snackbarState, setSnackbarState }}>{children}</SnackbarContext.Provider>;
};
