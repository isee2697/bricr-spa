import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  card: {
    width: theme.spacing(20),
    height: theme.spacing(12),
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientBlue.light,
  },
}));
