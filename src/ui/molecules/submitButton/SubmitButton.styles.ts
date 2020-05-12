import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .spinner': {
      position: 'absolute',
      opacity: 0,
    },
    minWidth: theme.spacing(20),
  },
  isLoading: {
    '& .label, & .MuiButton-startIcon, & .MuiButton-endIcon': {
      opacity: 0,
    },
    '& .spinner': {
      opacity: 1,
    },
  },
}));
