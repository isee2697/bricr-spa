import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  checkbox: {
    padding: theme.spacing(1.375, 1.375, 0, 0),
    color: theme.palette.white.main,
  },
  list: {
    '& .sort-select': {
      borderRadius: theme.spacing(0.5),
    },

    '& .list-select-all': {
      paddingLeft: 0,
    },
  },
}));
