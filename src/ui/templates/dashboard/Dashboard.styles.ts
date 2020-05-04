import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  menu: {
    marginTop: theme.spacing(2),
    flexGrow: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  actions: {
    display: 'flex',
    marginRight: -theme.spacing(1),
    '& > *': {
      marginLeft: theme.spacing(3),
    },
    '& > *:last-child': {
      marginLeft: theme.spacing(5),
    },
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  content: {
    padding: theme.spacing(0),
    flex: '1 1 auto',
  },
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: 2,
    background: 'rgba(130, 141, 185, 0.3)',
  },
}));
