import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  root: {
    minHeight: `calc(100vh - ${theme.spacing(20)}px)`,
    margin: theme.spacing(6, 6, 0, 6),
    backgroundColor: theme.palette.gray.light,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      minHeight: `calc(100vh - ${theme.spacing(12)}px)`,
    },
  },
  box: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    border: `solid ${theme.spacing(0.125)}px ${theme.palette.red.main}`,
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.white.main,
    padding: theme.spacing(1),
    color: theme.palette.red.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  spaceName: {
    fontWeight: theme.typography.fontWeightBold,
  },
  textColor: {
    color: theme.palette.gray.main,
  },
  logo: {
    width: theme.spacing(4),
  },
  loading: {
    animation: `$spin 2s linear infinite`,
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.blue.dark,
    },
  },
  checkIcon: {
    fontSize: theme.spacing(8),
    '& path': {
      fill: theme.palette.green.main,
    },
  },
}));
