import { ReactNode } from 'react';

import { SnackbarSeverity } from 'ui/molecules/snackbar/Snackbar.types';

export type ModalContextType = {
  snackbarState: SnackbarStateType;
  setSnackbarState: React.Dispatch<React.SetStateAction<SnackbarStateType>>;
};

export type SnackbarStateProps = {
  severity: SnackbarSeverity;
  message: ReactNode;
  modalTitle: ReactNode;
  modalContent: ReactNode;
  onUndo?: VoidFunction;
};

export type SnackbarStateType = {
  isOpen: boolean;
  props: SnackbarStateProps;
};
