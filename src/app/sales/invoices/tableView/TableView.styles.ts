import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  columnHeader: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer',
  },
}));
