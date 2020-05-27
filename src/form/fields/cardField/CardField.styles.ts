import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  '@keyframes blink': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  root: {
    borderWidth: theme.spacing(0.25),
    position: 'relative',
    minHeight: theme.spacing(17),
    cursor: 'text',
    '& .caret': {
      position: 'relative',
      '& .MuiTypography-root': {
        minWidth: theme.spacing(),
        minHeight: theme.spacing(4),
      },
      '& i': {
        display: 'none',
      },
    },
  },
  input: {
    opacity: 0,
    position: 'absolute',
  },
  focus: {
    borderColor: theme.palette.primary.main,
    '& .caret i': {
      display: 'block',
      position: 'absolute',
      width: theme.spacing(0.125),
      height: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      left: -theme.spacing(0.5),
      top: theme.spacing(1.5),
      animation: '$blink 800ms infinite',
      opacity: 1,
    },
  },
  error: {
    borderColor: theme.palette.red.main,
    color: theme.palette.red.main,
  },
  disabled: {
    cursor: 'default',
  },
  adornment: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h3.fontSize,
  },
}));
