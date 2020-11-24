import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  contentWrapper: {
    padding: theme.spacing(3),
    marginBottom: 0,
    height: '100%',
  },
  content: {
    height: '100%',
    width: '100%',
  },
}));
