import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  item: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
}));
