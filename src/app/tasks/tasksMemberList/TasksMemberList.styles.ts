import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  member: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    cursor: 'pointer',

    '&.selected': {
      background: theme.palette.white.main,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: `0px ${theme.spacing(0.5)}px ${theme.spacing(1)}px rgba(159, 192, 255, 0.5)`,
    },
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  name: {
    verticalAlign: 'top',
    lineHeight: `${theme.spacing(4)}px`,
  },
  inlineBlock: {
    display: 'inline-block',
  },
}));
