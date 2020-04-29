import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: 2,
    background: 'rgba(130, 141, 185, 0.3)',
  },
}));
