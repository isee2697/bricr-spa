import { ReactNode } from 'react';

export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export type SnackbarColors = 'red' | 'green' | 'blue' | 'orange' | 'black';

export type SnackbarColorsConfig = {
  message: SnackbarColors;
  border: SnackbarColors;
  title: SnackbarColors;
};

export type SnackbarProps = {
  severity: SnackbarSeverity;
  message: ReactNode;
  modalTitle: ReactNode;
  modalContent: ReactNode;
  onUndo: VoidFunction;
};
