import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
  },
  header: {
    flex: '1 1 auto',
  },
  setting: {
    marginRight: theme.spacing(3),
  },
}));
