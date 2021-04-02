import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.green.light}`,
    background: ({ inactive }: { inactive: boolean }) =>
      inactive ? theme.palette.yellow.light : theme.palette.white.main,
    marginBottom: theme.spacing(1),
  },
  btnSuccess: {
    background: theme.palette.gradientGreen.main,
    color: theme.palette.white.main,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  chip: {
    color: theme.palette.primary.main,
  },
}));
