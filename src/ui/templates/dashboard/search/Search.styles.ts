import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    background: theme.palette.gray.light,
    color: theme.palette.gray.main,
    borderRadius: theme.spacing(1),
  },
}));
