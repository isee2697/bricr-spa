import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[1],
    background: theme.palette.white.main,
    overflowX: 'auto',
  },
  logo: {
    marginRight: theme.spacing(4),
    minWidth: theme.spacing(15),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
