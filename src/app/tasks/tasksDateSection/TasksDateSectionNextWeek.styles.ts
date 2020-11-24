import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    background: theme.palette.gray.light,
  },
  title: {
    lineHeight: `${theme.spacing(7)}px`,
  },
  dayBox: {
    background: theme.palette.white.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginLeft: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.white.main}`,
    cursor: 'pointer',

    '&.selected': {
      border: `1px solid ${theme.palette.primary.dark}`,
      background: theme.palette.primary.light,
    },
  },
  weekDay: {
    color: theme.palette.gray.main,

    '&.black': theme.palette.black.main,
  },
  marginRightHalf: {
    marginRight: theme.spacing(0.5),
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  inlineBlock: {
    display: 'inline-block',
  },
}));
