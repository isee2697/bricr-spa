import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  box: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  emoji: {
    fontSize: 64,
  },
}));
