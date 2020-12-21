import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  formField: {
    marginTop: theme.spacing(1),
  },
  radioItem: {
    marginRight: -theme.spacing(2),
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
