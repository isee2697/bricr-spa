import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  tableHeaderCell: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: 'none',
  },
  currentOffer: {},
  offerDiff: {
    fontSize: theme.typography.h6.fontSize,
  },
  tableCellStatus: {
    '&.error': {
      color: theme.palette.error.main,
    },
  },
  conditionAvailable: {},
  conditionUnavailable: {
    color: theme.palette.gray.main,
    textDecoration: 'line-through',
  },
  actions: {
    marginTop: theme.spacing(3),
    textAlign: 'right',
  },
  actionButtons: {
    minWidth: theme.spacing(20),
    marginLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gray: {
    color: theme.palette.gray.main,
  },
  red: {
    color: theme.palette.red.main,
  },
  green: {
    color: theme.palette.green.main,
  },
  primary: {
    color: theme.palette.primary.main,
  },
}));
