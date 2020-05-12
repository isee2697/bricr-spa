import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
    '& .ScrollbarsCustom.trackXVisible': {
      [theme.breakpoints.down('sm')]: {
        width: `calc(100% + ${theme.spacing(1)}px) !important`,
      },
    },
  },
}));
