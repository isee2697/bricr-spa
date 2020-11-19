import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  grayBadge: {
    background: theme.palette.gray.light,
    color: theme.palette.gray.main,
  },
}));
