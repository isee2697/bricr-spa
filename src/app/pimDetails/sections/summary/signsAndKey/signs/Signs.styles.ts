import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  emptySection: {
    padding: theme.spacing(),
  },
  emptySectionEmoji: {
    fontSize: theme.spacing(4),
  },
}));
