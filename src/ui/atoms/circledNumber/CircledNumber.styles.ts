import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  number: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3) - 2}px`,
    borderRadius: theme.spacing(1.5),
    border: `2px solid ${theme.palette.gray.light}`,
    color: theme.palette.gray.main,
    textAlign: 'center',
  },
}));
