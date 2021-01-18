import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  documentsCount: {
    marginLeft: theme.spacing(2),
    padding: 0,
    color: theme.palette.gray.main,
    background: theme.palette.gray.light,

    '& > .MuiChip-label': {
      padding: theme.spacing(0, 1.5),
      fontSize: theme.typography.h4.fontSize,
    },
  },

  listContainer: {
    padding: theme.spacing(0),
  },
}));
