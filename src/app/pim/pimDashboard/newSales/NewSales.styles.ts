import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(5),
  },
  graph: {
    width: theme.spacing(16.5),
    height: theme.spacing(3.5),
  },
  tableRow: {
    '&:nth-child(odd)': {
      background: theme.palette.gray.light,
    },
  },
  tableCell: {
    border: 'none',
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
