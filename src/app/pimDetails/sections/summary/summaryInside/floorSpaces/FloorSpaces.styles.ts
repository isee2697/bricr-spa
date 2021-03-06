import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    paddingBottom: 0,
  },
  index: {
    color: theme.palette.gray.main,
    border: `2px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'center',
    marginRight: theme.spacing(1),
  },
  detailItem: {
    marginBottom: theme.spacing(1.5),

    '&:last-child': {
      marginBottom: 0,
    },
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
  detailItemIconSmall: {
    fontSize: theme.spacing(1.5),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
