import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  textDecorated: {
    textDecorationLine: 'line-through',
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
