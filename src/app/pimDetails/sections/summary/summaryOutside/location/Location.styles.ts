import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  detailItem: {
    marginTop: theme.spacing(1.5),
  },
  detailItemLabel: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.gray.main,
  },
  detailItemValue: {
    marginTop: theme.spacing(0.5),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    fontWeight: theme.typography.fontWeightMedium,
  },
  detailItemIcon: {
    verticalAlign: 'top',
    fontSize: theme.spacing(3),
  },
}));
