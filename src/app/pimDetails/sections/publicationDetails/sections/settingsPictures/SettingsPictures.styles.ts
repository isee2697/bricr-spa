import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(9),
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
