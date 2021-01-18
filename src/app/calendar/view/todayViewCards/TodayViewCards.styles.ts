import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    background: theme.palette.yellow.light,

    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
