import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(4),
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  count: {
    width: theme.spacing(3.375),
    height: theme.spacing(3),
    marginLeft: theme.spacing(0.5),
    fontSize: '.875rem',
  },
}));
