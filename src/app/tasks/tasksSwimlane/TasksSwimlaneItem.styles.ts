import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.white.main,
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
    width: 16,
    height: 16,
  },
  priorityIcon: {
    verticalAlign: 'middle',
    width: 16,
    height: 16,
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
    background: 'linear-gradient(315deg, rgba(10, 87, 233, 0.1) 0%, rgba(159, 192, 255, 0.1) 100%)',
    border: `1px dashed #0A57E9`,
    borderRadius: theme.spacing(1),
  },
  flexGrowOne: {
    flexGrow: 1,
  },
}));
