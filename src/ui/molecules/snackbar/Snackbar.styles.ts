import { makeStyles } from '@material-ui/core';

import { SnackbarSeverity, SnackbarColorsConfig } from './Snackbar.types';

const severityColorsMap: Record<SnackbarSeverity, SnackbarColorsConfig> = {
  error: { message: 'red', border: 'red', title: 'red' },
  warning: { message: 'orange', border: 'orange', title: 'orange' },
  info: { message: 'black', border: 'blue', title: 'blue' },
  success: { message: 'green', border: 'green', title: 'black' },
};

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  snackbar: {
    padding: spacing(1, 2),
    backgroundColor: palette.white.main,
    border: ({ severity }: { severity: SnackbarSeverity }) =>
      `${spacing(0.125)}px solid ${palette[severityColorsMap[severity].border].main}`,
    borderRadius: spacing(1),
    boxShadow: `0 ${spacing(0.5)}px ${spacing(1)}px ${palette.gray.main}4A`,
  },
  icon: {
    fontSize: spacing(3),
  },
  message: {
    margin: spacing(0, 1),
    width: spacing(33),
    fontSize: spacing(1.5),
    fontWeight: typography.fontWeightBold,
    color: ({ severity }: { severity: SnackbarSeverity }) => palette[severityColorsMap[severity].message].main,
  },
  button: {
    fontSize: spacing(1.5),
    color: palette.primary.main,
  },
  modalTitle: {
    color: ({ severity }: { severity: SnackbarSeverity }) => palette[severityColorsMap[severity].title].main,
  },
  modalActions: {
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },
  undoButton: {
    color: palette.red.main,
  },
}));
