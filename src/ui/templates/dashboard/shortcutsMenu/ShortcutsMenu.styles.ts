import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: theme.palette.gray.light,
    '&:hover': {
      backgroundColor: theme.palette.gray.light,
    },
    zIndex: 3,
  },
}));
