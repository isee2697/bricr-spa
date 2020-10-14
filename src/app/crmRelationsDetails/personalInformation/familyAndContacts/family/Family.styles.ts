import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  formField: {
    marginTop: theme.spacing(1),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  marginTopThree: {
    marginTop: theme.spacing(3),
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  gray: {
    color: theme.palette.gray.main,
  },
  radioItem: {
    marginRight: -theme.spacing(2),
  },
}));
