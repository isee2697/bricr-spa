import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  card: {
    '& > .MuiBox-root > .MuiBox-root:last-child': {
      marginBottom: 0,
    },
  },
}));
