import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.gray.main,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
  },
  value: {
    color: theme.palette.black.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  yellow: {
    color: theme.palette.orange.main,
  },
  priorityIcon: {
    verticalAlign: 'top',
  },
}));
