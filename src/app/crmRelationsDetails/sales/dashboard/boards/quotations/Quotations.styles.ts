import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  quotationItem: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),

    '&:first-of-type': {
      paddingTop: 0,
    },

    '&:last-of-type': {
      paddingBottom: 0,
    },
  },
  quotationImage: {
    width: 80,
    height: 64,
  },
  quotationTitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
  quotationLabel: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
