import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: theme.spacing(4),
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.gray.main,
    backgroundColor: theme.palette.gray.light,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
  active: {
    color: theme.palette.black.main,
    backgroundColor: theme.palette.white.main,
  },
}));
