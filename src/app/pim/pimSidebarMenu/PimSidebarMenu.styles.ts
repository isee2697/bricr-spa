import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
    paddingTop: theme.spacing(10),
  },
}));
