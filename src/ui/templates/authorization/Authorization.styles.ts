import { makeStyles } from '@material-ui/core/styles';

import RegisterBackground from '../../../assets/images/registerBackground.jpg';
const AuthBackground = 'https://source.unsplash.com/featured/?building';

export const useStyles = ({ isAuthPath }: { isAuthPath: boolean }) =>
  makeStyles(theme => ({
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
      paddingTop: theme.spacing(4),
      backgroundImage: () => `url(${isAuthPath ? AuthBackground : RegisterBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.gray.light,
      backgroundSize: 'cover',
      backgroundPosition: isAuthPath ? 'center' : 'center right',
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
    language: {
      position: 'absolute',
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
  }))();
