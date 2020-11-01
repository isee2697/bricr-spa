import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: 0,
    paddingBottom: 0,

    '&:last-child': {
      paddingBottom: theme.spacing(1),
    },
  },
  rowItem: {
    height: theme.spacing(4.75),
    paddingTop: 0,
    paddingBottom: 0,

    '&.no-margin': {
      borderBottom: 'none',
    },
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
