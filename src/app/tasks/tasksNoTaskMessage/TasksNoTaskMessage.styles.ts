import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    fontSize: 40,
  },
  message: {
    fontSize: 12,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
