import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.spacing(),
    height: theme.spacing(10),
    width: theme.spacing(17.5),
    '& .MuiGrid-container': {
      height: '100%',
      padding: theme.spacing(),
      borderRadius: theme.spacing(),
      boxSizing: 'border-box',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  empty: {
    border: `2px solid ${theme.palette.gray.light}`,
  },
  loading: {
    background: theme.palette.white.light,
  },
  error: {
    background: theme.palette.white.light,
    border: `2px solid ${theme.palette.red.main}`,
    color: theme.palette.red.main,
    fontSize: theme.typography.h6.fontSize,
    '& .MuiSvgIcon-root path': {
      fill: theme.palette.red.main,
    },
  },
  inputField: {
    display: 'none',
  },
  text: {
    width: '100%',
  },
}));
