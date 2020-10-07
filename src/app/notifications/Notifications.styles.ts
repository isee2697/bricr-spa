import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  listContent: {
    padding: 0,
  },
}));
