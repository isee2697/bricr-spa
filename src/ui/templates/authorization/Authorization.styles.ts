import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    '& button[type=submit]': {
      margin: `${theme.spacing(3)}px 0 0 0`,
    },
    '& .MuiAlert-root': {
      width: '100%',
      margin: `${theme.spacing(2)}px 0`,
    },
    '& .MuiTypography-h1': {
      width: '100%',
      marginBottom: theme.spacing(4),
    },
  },
  topBar: {
    boxShadow: 'none',
  },
  backLink: {
    marginRight: 'auto',
    marginTop: theme.spacing(4),
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?building)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.gray.light,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      flex: `0 0 ${theme.spacing(46.5)}px`,
    },
  },
  contentWrapper: {
    [theme.breakpoints.up('sm')]: {
      flex: `0 0 calc(100% - ${theme.spacing(46.5)}px)`,
      maxWidth: `calc(100% - ${theme.spacing(46.5)}px)`,
    },
  },
  content: {
    height: `calc(100% - ${theme.spacing(8)}px)`,
    margin: '0 auto',
    padding: theme.spacing(1),
    justifyContent: 'center',
    display: 'flex',
    paddingTop: theme.spacing(5.5),
    '& form': {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 0,
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));
