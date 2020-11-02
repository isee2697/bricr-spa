import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  noPadding: {
    padding: 0,
  },
  tabs: {
    '& .MuiTab-root': {
      minWidth: theme.spacing(11.25),
    },
  },
}));
