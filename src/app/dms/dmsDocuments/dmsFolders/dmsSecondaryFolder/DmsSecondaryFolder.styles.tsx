import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  backBtnWrapper: {
    width: theme.spacing(5.25),
    height: theme.spacing(5.25),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: `${theme.spacing(5.25)}px ${theme.spacing(5.25)}px`,
  },
  backBtnIcon: {
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.white.main,
    cursor: 'pointer',
    position: 'relative',
    top: theme.spacing(0.5),
  },
  searchBoxWrapper: {
    position: 'relative',
  },
  searchBox: {
    maxWidth: theme.spacing(42.5),
    minWidth: theme.spacing(42.5),
    width: theme.spacing(42.5),
    top: 0,
  },
  listItem: {
    marginBottom: theme.spacing(2.5),
  },
}));
