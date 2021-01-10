import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  resizeHandle: {
    position: 'absolute',
    right: theme.spacing(0.5),
    bottom: theme.spacing(0.5),
    cursor: 'nwse-resize',
  },
  placeholder: {
    width: theme.spacing(20),
    height: theme.spacing(12),
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientBlue.light,
  },
}));
