import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    overflowX: 'auto',
  },
  itemsWrapper: {
    padding: theme.spacing(1, 0.5),
    borderRadius: theme.spacing(0.5),
    background: theme.palette.gray.light,
  },
  item: {
    height: theme.spacing(4),
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(0.5),
    background: theme.palette.white.main,
    border: `2px solid ${theme.palette.gray.light}`,
  },
  itemIcon: {
    height: theme.spacing(2.5),
    width: theme.spacing(2.5),
    borderRadius: theme.spacing(1.25),
    background: theme.palette.red.light,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
