import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    paddingBottom: 0,
  },
  info: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    color: theme.palette.black.main,
    '& strong': {
      color: theme.palette.red.main,
    },
  },
  actions: {
    paddingTop: theme.spacing(1.75),
    paddingBottom: theme.spacing(2),
    borderTop: `2px solid ${theme.palette.gray.light}`,
  },
}));
