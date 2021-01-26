import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  resizeHandle: {
    position: 'absolute',
    right: theme.spacing(0.5),
    bottom: theme.spacing(0.5),
    cursor: 'nwse-resize',
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  gridLayout: {
    '& > .react-grid-placeholder': {
      background: theme.palette.gradientBlue.light,
      border: `1px dashed ${theme.palette.primary.main}`,
      borderRadius: theme.spacing(1),
      opacity: 1,
    },
  },
  placeholder: {
    width: '100%',
    height: '100%',
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    filter: 'grayscale(1)',

    '& ~ div': {
      display: 'none',
    },

    '& > button': {
      opacity: 0,
    },

    '&:hover > button': {
      opacity: 1,
    },
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
