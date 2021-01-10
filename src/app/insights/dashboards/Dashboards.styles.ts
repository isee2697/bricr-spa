import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  resizeHandle: {
    position: 'absolute',
    right: theme.spacing(0.5),
    bottom: theme.spacing(0.5),
    cursor: 'nwse-resize',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientBlue.light,

    '& ~ div': {
      display: 'none',
    },
  },
}));
