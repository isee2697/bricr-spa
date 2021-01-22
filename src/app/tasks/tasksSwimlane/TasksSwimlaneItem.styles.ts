import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.white.main,
    cursor: 'pointer',

    '&:hover': {
      background: theme.palette.gradientBlue.light,
    },

    '&.dragging': {
      display: 'none',
    },
  },
  card: {
    padding: theme.spacing(2),

    '&:last-child': {
      padding: theme.spacing(2),
    },
  },
  expireInfo: {
    color: theme.palette.gray.main,

    '&.overdue': {
      color: theme.palette.error.main,
    },

    '&.lessThanOneHour': {
      color: theme.palette.error.main,
    },
  },
  title: {
    marginBottom: theme.spacing(1.5),
  },
  taskLocked: {
    lineHeight: `${theme.spacing(3)}px`,
    marginRight: theme.spacing(1),
  },
  taskLockedIcon: {
    verticalAlign: 'middle',
  },
  priorityIcon: {
    verticalAlign: 'middle',
  },
  refreshButton: {
    marginRight: theme.spacing(1.5),
  },
  taskId: {
    lineHeight: `${theme.spacing(3)}px`,
    marginRight: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: theme.typography.h5.fontSize,
  },
  placeholder: {
    height: theme.spacing(13),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
  },
  linkItem: {
    color: theme.palette.gray.main,
    background: theme.palette.white.main,
    padding: theme.spacing(0.5),
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: theme.spacing(1),

    '&.selected': {
      color: theme.palette.white.main,
      background: theme.palette.gray.main,
    },
  },
  flexGrowOne: {
    flexGrow: 1,
  },
}));
