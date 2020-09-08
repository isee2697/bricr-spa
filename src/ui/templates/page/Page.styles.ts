import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  titleContainer: {
    '&.MuiGrid-item': {
      paddingLeft: 0,
    },
  },
  title: {
    marginRight: theme.spacing(3),
  },
  buttons: {
    marginLeft: 'auto',
    marginRight: theme.spacing(0),
    width: 'auto',
  },
  inputField: {
    marginBottom: theme.spacing(2),
    marginTop: 0,
  },
  childContainer: {
    '& > .MuiGrid-item + .MuiGrid-item': {
      marginTop: theme.spacing(3),
    },
  },
  lastUpdated: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));
