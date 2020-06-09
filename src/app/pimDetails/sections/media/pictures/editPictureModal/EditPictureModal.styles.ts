import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0, 2),
  },
  actions: {
    paddingTop: theme.spacing(1.75),
    paddingBottom: theme.spacing(2),
    borderTop: `2px solid ${theme.palette.gray.light}`,
  },
  form: {
    '& div:first-of-type': {
      marginTop: 0,
    },
    '& div:last-of-type': {
      marginBottom: 0,
    },
  },
}));
