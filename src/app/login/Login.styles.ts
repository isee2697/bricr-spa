import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  logo: {
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(4),
  },
  alert: {
    width: '100%',
    margin: `${theme.spacing(2)}px 0`,
  },
  submit: {
    margin: `${theme.spacing(2)}px 0 0 0`,
  },
}));
