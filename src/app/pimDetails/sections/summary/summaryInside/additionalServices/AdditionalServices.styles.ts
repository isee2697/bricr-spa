import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  index: {
    color: theme.palette.gray.main,
    border: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
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
}));
