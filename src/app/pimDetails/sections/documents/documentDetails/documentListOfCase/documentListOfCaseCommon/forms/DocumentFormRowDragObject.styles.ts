import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 1200,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
}));
