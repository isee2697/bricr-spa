import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.gray.light,
    borderRadius: 8,
    height: '100%',
    padding: theme.spacing(1),
  },
  tasksSwimlaneItemsContainer: {
    marginTop: theme.spacing(3),
  },
  columnName: {
    padding: theme.spacing(0.5, 1),
    borderRadius: 4,
  },
  backGrayLight: {
    backgroundColor: theme.palette.gray.light,
  },
  backYellowLight: {
    backgroundColor: theme.palette.yellow.light,
  },
  backRedLight: {
    backgroundColor: theme.palette.red.light,
  },
  backGreenLight: {
    backgroundColor: theme.palette.green.light,
  },
  gray: {
    color: theme.palette.gray.main,
  },
  yellow: {
    color: theme.palette.yellow.main,
  },
  red: {
    color: theme.palette.red.main,
  },
  green: {
    color: theme.palette.green.main,
  },
  textAlignRight: {
    textAlign: 'right',
  },
  noPadding: {
    padding: 0,
  },
  flexGrowOne: {
    flex: 1,
  },
  flexGrowZero: {
    flex: 0,
  },
}));
