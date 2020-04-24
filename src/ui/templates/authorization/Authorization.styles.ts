import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
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
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& form': {
      width: '100%',
    },
  },
}));
