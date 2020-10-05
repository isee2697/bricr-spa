import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  avatarContainer: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(8),
  },
  avatarItem: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  avatarEmpty: {
    border: 'none',
    background: theme.palette.gray.light,
  },
  radioItem: {
    marginRight: -theme.spacing(2),
  },
  formField: {
    marginTop: theme.spacing(1),
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
