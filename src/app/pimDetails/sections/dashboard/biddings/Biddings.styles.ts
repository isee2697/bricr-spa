import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  biddingContact: {
    color: theme.palette.gray.main,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
