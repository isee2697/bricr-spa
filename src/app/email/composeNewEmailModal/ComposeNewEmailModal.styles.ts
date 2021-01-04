import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  btnSmall: {
    background: theme.palette.gray.light,
    color: theme.palette.gray.main,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5),
    cursor: 'pointer',
    height: theme.spacing(4),

    '&:hover': {
      background: theme.palette.gray.dark,
    },

    '&.selected': {
      background: theme.palette.gray.main,
      color: theme.palette.white.main,
    },
  },
}));
