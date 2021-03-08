import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
  },
  title: {
    flex: '1 1 auto',
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
}));
