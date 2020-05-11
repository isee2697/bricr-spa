import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: theme.palette.gray.light,
    '&:hover': {
      backgroundColor: theme.palette.gray.light,
    },
    zIndex: 3,
  },
  box: {
    marginBottom: theme.spacing(1),
    maxWidth: 250,
  },
  header: {
    padding: 0,
    marginBottom: theme.spacing(2),
  },
}));
