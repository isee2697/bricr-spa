import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  header: {
    fontWeight: theme.typography.fontWeightBolder,
    flex: '1 1 auto',
  },
  date: {
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(3),
  },
}));
