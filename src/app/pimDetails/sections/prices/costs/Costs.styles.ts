import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    overflow: 'visible',
  },
  count: {
    width: theme.spacing(3.375),
    height: theme.spacing(3),
    marginLeft: theme.spacing(0.5),
    fontSize: theme.typography.h4.fontSize,
  },
}));
