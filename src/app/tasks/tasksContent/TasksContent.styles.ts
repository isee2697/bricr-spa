import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexGrowZero: {
    flex: 0,
  },
  flexGrowOne: {
    flex: 1,
  },
  sortIcon: {
    marginLeft: theme.spacing(3),
  },
}));