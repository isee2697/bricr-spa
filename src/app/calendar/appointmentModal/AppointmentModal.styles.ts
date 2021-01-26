import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  btnShare: {
    color: theme.palette.gray.main,
    transform: 'rotate(90deg)',
  },
  grayIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: theme.spacing(1),
    background: theme.palette.gray.main,
    color: theme.palette.white.main,
  },
  grayBack: {
    background: theme.palette.gray.light,
  },
}));
