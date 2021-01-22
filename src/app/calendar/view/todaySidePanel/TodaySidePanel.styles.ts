import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: theme.spacing(30),
    marginLeft: theme.spacing(3),
    position: 'relative',
  },
  item: {
    cursor: 'pointer',

    '&:hover': {
      zIndex: 100,
    },
  },
}));
