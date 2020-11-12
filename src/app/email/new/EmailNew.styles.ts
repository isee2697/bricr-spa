import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    marginBottom: 0,
  },
  tab: {
    background: theme.palette.white.main,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
