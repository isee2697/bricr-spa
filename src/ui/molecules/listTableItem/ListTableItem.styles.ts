import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, typography }) => ({
  header: {
    color: palette.gray.main,
    fontSize: typography.h5.fontSize,
    cursor: 'pointer',
  },
  active: {
    color: palette.blue.dark,
  },
}));
