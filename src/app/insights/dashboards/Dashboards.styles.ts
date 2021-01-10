import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  resizeHandle: {
    position: 'absolute',
    right: theme.spacing(0.5),
    bottom: theme.spacing(0.5),
    cursor: 'nwse-resize',
  },
}));
