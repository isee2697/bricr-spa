import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  row: {
    cursor: 'pointer',
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(2),
    position: 'relative',

    '&:last-child': {
      marginBottom: 0,
    },

    '&.disabled': {
      color: theme.palette.gray.main,
      cursor: 'default',
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  btnFollowUp: {
    position: 'absolute',
    right: -theme.spacing(3),
    padding: 0,
  },
  followUpIcon: {
    fontSize: theme.spacing(3),
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
