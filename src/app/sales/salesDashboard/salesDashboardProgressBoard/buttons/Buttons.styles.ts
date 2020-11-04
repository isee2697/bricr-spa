import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
  buttonLabel: {
    position: 'relative',
  },
  bucketButtonTop: {
    position: 'absolute',
    top: -theme.spacing(1.5),
  },
  arrowButtonIcon: {
    position: 'absolute',
    top: theme.spacing(1.5),
  },
  cardsButtonIcon: {
    position: 'absolute',
    top: theme.spacing(1),
  },
  closeButtonIcon: {
    position: 'absolute',
    top: theme.spacing(0.5),
  },
}));
