import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  emoji: {
    fontSize: theme.spacing(3),
    verticalAlign: 'middle',
  },
  status: {
    marginTop: theme.spacing(1),
    color: theme.palette.gray.main,
  },
}));
