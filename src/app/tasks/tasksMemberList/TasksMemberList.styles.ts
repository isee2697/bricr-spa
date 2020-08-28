import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  member: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
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
  inlineBlock: {
    display: 'inline-block',
  },
}));
