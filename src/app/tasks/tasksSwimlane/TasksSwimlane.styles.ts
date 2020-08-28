import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  tasksSwimlaneColumn: {
    backgroundColor: theme.palette.gray.light,
    borderRadius: 8,
    height: '100%',
  },
  noPadding: {
    padding: 0,
  },
  flexGrowOne: {
    flex: 1,
  },
}));
