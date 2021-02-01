import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  titleIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    background: theme.palette.white.main,
    color: theme.palette.gray.main,
  },
}));
