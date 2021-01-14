import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  tableTopHeader: {
    margin: theme.spacing(0, -2),
  },
  table: {
    margin: theme.spacing(0, -2),
    width: `calc(100% + ${theme.spacing(4)}px)`,
  },
  tableRow: {
    '&:nth-child(odd)': {
      background: theme.palette.blue.light,
    },
  },
  grayText: {
    color: theme.palette.gray.main,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  mediumText: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
