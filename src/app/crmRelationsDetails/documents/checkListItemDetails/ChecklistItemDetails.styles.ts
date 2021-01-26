import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  rotatedButton: {
    transform: 'rotate(90deg)',
  },
  checkIcon: {
    border: `1px solid ${theme.palette.green.main}`,
    color: theme.palette.white.main,
    background: theme.palette.green.main,
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
    borderRadius: theme.spacing(1.5),
  },
  chip: {
    color: theme.palette.gray.main,
    background: theme.palette.white.main,
  },
  pdfViewer: {
    width: '100%',
    height: theme.spacing(100),
  },
}));
