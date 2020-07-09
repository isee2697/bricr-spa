import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    color: theme.palette.black.main,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(4),
  },
  actions: {
    paddingTop: theme.spacing(1.75),
    paddingBottom: theme.spacing(2),
    borderTop: `2px solid ${theme.palette.gray.light}`,
  },
}));
