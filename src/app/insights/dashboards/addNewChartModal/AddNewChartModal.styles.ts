import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  chip: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h4.fontSize,
    background: theme.palette.gray.light,
    padding: theme.spacing(0, 1),
    borderRadius: theme.spacing(8),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    minWidth: theme.spacing(3.5),
  },
}));
