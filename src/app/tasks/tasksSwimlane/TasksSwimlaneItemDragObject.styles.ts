import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 1200,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  root: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.white.main,
    cursor: 'pointer',
    width: `calc(25% - ${theme.spacing(8)}px)`,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  expireInfo: {
    color: theme.palette.gray.main,
    marginBottom: theme.spacing(1),

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
    width: theme.spacing(2),
    height: theme.spacing(2),
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
