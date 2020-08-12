import { SnackbarStateProps } from 'context/snackbar/snackbarContext/SnackbarContext.types';

export type useSnackbarType = {
  open: (props: SnackbarStateProps) => void;
};
