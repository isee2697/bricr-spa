import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  searchBoxWrapper: {
    position: 'relative',
  },
  searchBox: {
    maxWidth: theme.spacing(50),
    minWidth: theme.spacing(50),
    width: theme.spacing(50),
    top: 0,
  },
  listItem: {
    marginBottom: theme.spacing(2.5),
  },
  page: {
    height: '100%',
  },
}));
