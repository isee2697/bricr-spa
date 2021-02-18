import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  deletedTitle: {
    color: theme.palette.red.main,
  },
  remainedTitle: {
    color: theme.palette.green.main,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
