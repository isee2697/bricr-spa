import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  peopleHeader: {
    marginBottom: theme.spacing(3),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
  },
}));
