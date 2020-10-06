import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  specificationDetailItem: {
    marginTop: theme.spacing(1.5),
  },
  specificationDetailItemValue: {
    marginTop: theme.spacing(0.5),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    fontWeight: theme.typography.fontWeightMedium,
  },
  specificationIcon: {
    verticalAlign: 'top',
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
