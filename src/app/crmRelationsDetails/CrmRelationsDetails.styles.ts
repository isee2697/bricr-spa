import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  contentWrapper: {
    overflow: 'auto',
  },
  content: {
    padding: theme.spacing(3),
    marginBottom: 0,
  },
}));
