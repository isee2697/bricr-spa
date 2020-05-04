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
  topBarLink: {
    marginLeft: 'auto',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?building)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.gray.light,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    height: `calc(100% - ${theme.spacing(8)}px)`,
    margin: '0 auto',
    padding: theme.spacing(1),
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& form': {
      width: '100%',
    },
  },
}));
