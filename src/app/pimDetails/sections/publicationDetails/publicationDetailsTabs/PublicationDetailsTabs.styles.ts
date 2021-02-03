import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  checkIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(3),
    background: theme.palette.success.main,
    color: theme.palette.white.main,
  },
}));
