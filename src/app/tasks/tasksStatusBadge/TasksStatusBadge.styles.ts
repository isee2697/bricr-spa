import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    borderRadius: theme.spacing(0.5),
  },
  backGrayLight: {
    backgroundColor: theme.palette.gray.light,
  },
  backYellowLight: {
    backgroundColor: theme.palette.yellow.light,
  },
  backRedLight: {
    backgroundColor: theme.palette.red.light,
  },
  backGreenLight: {
    backgroundColor: theme.palette.green.light,
  },
  gray: {
    color: theme.palette.gray.main,
  },
  yellow: {
    color: theme.palette.yellow.main,
  },
  red: {
    color: theme.palette.red.main,
  },
  green: {
    color: theme.palette.green.main,
  },
}));
