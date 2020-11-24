import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
  },
  taskLabelIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    verticalAlign: 'middle',
  },
}));
