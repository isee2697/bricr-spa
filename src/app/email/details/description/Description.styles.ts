import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardContent: {
    '&:last-child': {
      padding: 0,
    },
  },
}));
