import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .spinner': {
      position: 'absolute',
      opacity: 0,
    },
  },
  isLoading: {
    '& .label': {
      opacity: 0,
    },
    '& .spinner': {
      opacity: 1,
    },
  },
}));
