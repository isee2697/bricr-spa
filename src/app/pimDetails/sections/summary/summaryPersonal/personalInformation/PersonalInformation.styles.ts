import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(29),
  },
  personalInfoItem: {
    marginBottom: theme.spacing(2),
  },
  marginTopThree: {
    marginTop: theme.spacing(3),
  },
  detailItem: {
    marginTop: theme.spacing(1.5),
  },
  detailItemLabel: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.gray.main,
  },
  detailItemValue: {
    marginTop: theme.spacing(0.5),
  },
}));
