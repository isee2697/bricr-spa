import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  map: {
    height: '100%',
  },
  container: {
    position: 'relative',
    height: '350px',
  },
  disabledOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    background: 'rgba(255,255,255,0.15)',
  },
}));
