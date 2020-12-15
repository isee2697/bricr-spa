import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
