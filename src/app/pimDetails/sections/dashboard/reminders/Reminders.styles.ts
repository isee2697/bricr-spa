import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  success: {
    color: theme.palette.success.main,
  },
}));
