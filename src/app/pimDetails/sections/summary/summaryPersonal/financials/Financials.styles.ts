import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
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
    fontWeight: theme.typography.fontWeightMedium,

    '&.red': {
      color: theme.palette.red.main,
    },

    '&.green': {
      color: theme.palette.green.main,
    },
  },
  detailItemIcon: {
    verticalAlign: 'top',
    fontSize: theme.spacing(3),
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  textAlignRight: {
    textAlign: 'right',
  },
}));
