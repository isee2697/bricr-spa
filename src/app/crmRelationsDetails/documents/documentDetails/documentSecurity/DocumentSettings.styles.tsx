import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  grayText: {
    color: theme.palette.gray.main,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
