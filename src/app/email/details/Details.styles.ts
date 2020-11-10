import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    marginBottom: 0,
  },
  pinIcon: {
    fontSize: theme.spacing(2),
  },
  splitter: {
    height: '1px',
    background: theme.palette.black.main,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
