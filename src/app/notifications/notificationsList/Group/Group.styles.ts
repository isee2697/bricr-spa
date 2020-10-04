import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),

    '&.checked': {
      background: `${theme.palette.primary.main}08`,
    },
  },
  rowContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    cursor: 'pointer',

    '&.disabled': {
      color: theme.palette.gray.main,
      cursor: 'default',
    },
  },
  checkbox: {
    padding: theme.spacing(2),
    marginLeft: -theme.spacing(1.5),
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  createdAt: {
    color: theme.palette.gray.main,
    marginRight: theme.spacing(2),
    height: theme.spacing(2.5),
    lineHeight: `${theme.spacing(2.5)}px`,
  },
  followUpIcon: {
    width: theme.spacing(2),
    height: theme.spacing(1.5),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
