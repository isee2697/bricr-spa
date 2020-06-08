import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    '& button + button': {
      marginLeft: theme.spacing(2),
    },
  },
}));
