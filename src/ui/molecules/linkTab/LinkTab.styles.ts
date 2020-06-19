import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flex: theme.spacing('0', '0', 8),
    minWidth: 'auto',
    padding: theme.spacing(0.75, 0),
    marginRight: theme.spacing(2.75),
    marginLeft: theme.spacing(2.75),
  },
}));
