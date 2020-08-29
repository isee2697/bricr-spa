import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.white.main,
  },
  expireInfo: {
    color: theme.palette.gray.main,
    marginBottom: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(1.5),
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: theme.typography.h5.fontSize,
  },
}));
