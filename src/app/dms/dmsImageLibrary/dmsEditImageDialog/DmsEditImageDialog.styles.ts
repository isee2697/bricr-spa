import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  chipItem: {
    borderRadius: theme.spacing(1),
    background: theme.palette.gray.light,
    color: theme.palette.gray.main,
  },
  closeIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));
