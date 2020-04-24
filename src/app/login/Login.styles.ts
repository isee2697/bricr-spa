import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  logo: {
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(4),
  },
}));
