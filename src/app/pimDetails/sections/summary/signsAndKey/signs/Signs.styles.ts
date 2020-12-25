import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  emptySection: {
    padding: theme.spacing(),
  },
  emptySectionEmoji: {
    fontSize: theme.spacing(4),
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
  deleteIcon: {
    color: theme.palette.error.main,
  },
}));
