import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    minHeight: '70vh',
  },
  tasksStatus: {},
  tasksStatusLogo: {
    fontSize: 40,
  },
  tasksStatusMessage: {
    fontSize: 12,
    fontWeight: theme.typography.fontWeightBold,
  },
  sortIcon: {
    marginLeft: theme.spacing(3),
  },
  taskItemsColumn: {
    backgroundColor: theme.palette.gray.light,
    borderRadius: 8,
    height: '100%',
  },
  noPadding: {
    padding: 0,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexGrowZero: {
    flex: 0,
  },
  flexGrowOne: {
    flex: 1,
  },
}));
