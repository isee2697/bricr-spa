import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '&:hover .MuiBadge-root': {
      display: 'block',
    },
  },
  item: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.spacing(),
    height: theme.spacing(10),
    width: theme.spacing(13),
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
    '&.enabled': {
      border: `1px solid ${theme.palette.gray.main}`,
      cursor: 'pointer',
    },
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
  checkbox: {
    position: 'absolute',
    left: theme.spacing(0),
    top: theme.spacing(0),
    padding: theme.spacing(0.625),
    cursor: 'pointer',
  },
  badge: {
    position: 'absolute',
    right: theme.spacing(0.75),
    display: 'none',
    cursor: 'pointer',
  },
  badgeIcon: {
    color: theme.palette.white.main,
    fontSize: '0.75rem',
    '& path': {
      fill: theme.palette.white.main,
    },
  },
  inputRoot: {
    '& input': {
      cursor: 'pointer',
      color: theme.palette.gray.main,
    },
    '&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderBottomColor: theme.palette.gray.main,
    },
  },
}));
