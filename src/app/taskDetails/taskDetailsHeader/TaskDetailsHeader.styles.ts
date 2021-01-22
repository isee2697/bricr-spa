import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  taskTitle: {
    marginTop: theme.spacing(3),
  },
  btnShare: {
    marginRight: theme.spacing(1),
  },
  btnRefresh: {
    background: theme.palette.white.main,
    width: theme.spacing(4),
  },
  btnNotify: {
    background: theme.palette.white.main,
    marginLeft: theme.spacing(1),
  },
}));
