import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  member: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(3),
    cursor: 'pointer',

    '&.selected': {
      backgroundColor: theme.palette.white.main,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
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
