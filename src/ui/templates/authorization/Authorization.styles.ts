import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.gray.light,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& form': {
      width: '100%',
    },
  },
}));
