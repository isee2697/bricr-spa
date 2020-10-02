import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    '&:first-child': {
      paddingTop: theme.spacing(0),
    },
  },
  description: {
    marginBottom: theme.spacing(2),
  },
}));
