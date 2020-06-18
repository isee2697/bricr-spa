import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    marginRight: theme.spacing(3),
  },
  description: {
    margin: 0,
    marginTop: theme.spacing(1),
  },
  buttons: {
    marginLeft: 'auto',
  },
  iconSpacing: {
    marginLeft: theme.spacing(3),
  },
  form: {
    '&.MuiGrid-item': {
      paddingTop: 0,
    },
  },
}));
