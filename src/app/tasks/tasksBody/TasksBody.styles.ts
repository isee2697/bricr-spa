import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    minHeight: '70vh',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexGrowOne: {
    flex: 1,
  },
  noPadding: {
    padding: 0,
  },
}));
