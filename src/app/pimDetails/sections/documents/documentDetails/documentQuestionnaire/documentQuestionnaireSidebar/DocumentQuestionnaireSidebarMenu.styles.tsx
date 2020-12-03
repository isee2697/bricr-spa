import { makeStyles, withStyles } from '@material-ui/core/styles';

import { StepConnector, StepLabel } from 'ui/atoms';

export const useStyles = makeStyles(theme => ({
  step: {
    padding: 0,
  },
  stepper: {
    backgroundColor: 'transparent',
  },
  checkIcon: {
    color: theme.palette.success.main,
    width: theme.spacing(2),
  },
  closeIcon: {
    color: theme.palette.error.main,
    width: theme.spacing(2),
  },
  chipText: {
    marginLeft: theme.spacing(1.25),
    color: theme.palette.gray.main,
    fontSize: theme.typography.h4.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
    height: theme.typography.h4.lineHeight,
    padding: theme.spacing(0, 1),
    minWidth: theme.spacing(3.5),
    '& span': {
      padding: 0,
    },
  },
  date: {
    color: theme.palette.gray.main,
  },
}));

export const Connector = withStyles(theme => ({
  vertical: {
    paddingBottom: 0,
    marginTop: -theme.spacing(6.75),
    '& $line': {
      height: theme.spacing(11.25),
    },
  },
  active: {
    '& $line': {
      borderColor: theme.palette.success.main,
    },
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.success.main,
    },
  },
  line: {
    borderColor: theme.palette.gray.light,
    borderWidth: 2,
    borderRadius: 1,
  },
}))(StepConnector);

export const Labels = withStyles(theme => ({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    '& .MuiStepLabel-iconContainer': {
      zIndex: 999,
      cursor: 'pointer',
    },
  },
  vertical: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: theme.spacing(6.75),
  },
  label: {
    '& h5': {
      minWidth: theme.spacing(10.5),
    },
    '& h6': {
      color: theme.palette.gray.main,
    },
  },
  active: {
    '& .MuiAvatar-root': {
      background: theme.palette.black.main,
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  completed: {
    '& h5': {
      color: theme.palette.success.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}))(StepLabel);
