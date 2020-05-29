import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
  content: {
    paddingBottom: theme.spacing(2),
  },
}));
