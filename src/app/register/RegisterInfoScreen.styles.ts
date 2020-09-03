import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '80vh',
    backgroundColor: theme.palette.gray.light,
    margin: theme.spacing(10, 3, 0, 3),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));
