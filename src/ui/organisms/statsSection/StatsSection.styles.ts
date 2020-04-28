import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(3),
      flex: '1 0 auto',
    },
    '& > *:last-child': {
      marginRight: 0,
    },
  },
}));
