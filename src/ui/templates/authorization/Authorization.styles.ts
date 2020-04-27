import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    '& button[type=submit]': {
      margin: `${theme.spacing(2)}px 0 0 0`,
    },
    '& .MuiAlert-root': {
      width: '100%',
      margin: `${theme.spacing(2)}px 0`,
    },
    '& .MuiTypography-h1': {
      width: '100%',
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4),
    },
  },
  logo: {
    marginBottom: theme.spacing(4),
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/RFDP7_80v5A/1600x900)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.gray.light,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    height: '100%',
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
