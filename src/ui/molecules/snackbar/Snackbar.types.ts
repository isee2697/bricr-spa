export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export type SnackbarColors = 'red' | 'green' | 'blue' | 'orange' | 'black';

export type SnackbarColorsConfig = {
  message: SnackbarColors;
  border: SnackbarColors;
  title: SnackbarColors;
};
