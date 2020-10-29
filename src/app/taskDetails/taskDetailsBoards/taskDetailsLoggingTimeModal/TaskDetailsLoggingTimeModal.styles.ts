import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  emoji: {
    fontSize: theme.spacing(6),
  },
  progress: {
    height: theme.spacing(0.5),
    borderRadius: theme.spacing(0.25),
  },
}));
