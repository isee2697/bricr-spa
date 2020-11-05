import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    paddingBottom: 0,
    marginBottom: 0,
  },
  lastUpdated: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));
