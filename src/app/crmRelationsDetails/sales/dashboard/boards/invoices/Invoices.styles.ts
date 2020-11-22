import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  invoiceItem: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),

    '&:first-of-type': {
      paddingTop: 0,
    },

    '&:last-of-type': {
      paddingBottom: 0,
    },
  },
  invoiceImage: {
    width: 80,
    height: 64,
  },
  invoiceTitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
  invoiceLabel: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
