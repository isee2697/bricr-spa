import { useContext } from 'react';

import { SnackbarContext } from 'context/snackbar/snackbarContext/SnackbarContext';
import { SnackbarStateProps } from 'context/snackbar/snackbarContext/SnackbarContext.types';

import { useSnackbarType } from './useSnackbar.types';

export const useSnackbar = (): useSnackbarType => {
  const context = useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error('useSnackbar must be used within an SnacbarContextController');
  }

  return {
    open: (props: SnackbarStateProps) => context.setSnackbarState({ isOpen: true, props }),
  };
};
