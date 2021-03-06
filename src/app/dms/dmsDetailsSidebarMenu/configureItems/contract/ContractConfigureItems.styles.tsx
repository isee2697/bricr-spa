import { makeStyles, withStyles } from '@material-ui/core/styles';

import { StepConnector, StepLabel } from 'ui/atoms';

export const useStyles = makeStyles(theme => ({
  menuWrapper: {
    width: '100%',
    height: `calc(100% - ${theme.spacing(5)}px)`,
    position: 'absolute',
    zIndex: 1,
  },
  step: {
    cursor: 'pointer',
    padding: 0,

    '& *': {
      cursor: 'pointer',
    },
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
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  avatar: {
    background: theme.palette.red.light,
    color: theme.palette.red.main,
    marginRight: theme.spacing(0.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  sideBarButtonWrapper: {
    height: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    cursor: 'pointer',
    color: theme.palette.gray.main,
  },
  sideBarButton: {
    padding: theme.spacing(1, 0),

    '&.selected': {
      color: theme.palette.black.main,
    },
  },
  sideBarBottomBorder: {
    height: 2,
    background: theme.palette.gray.light,

    '&.selected': {
      background: theme.palette.gradientPrimary.main,
    },
  },
}));

export const Connector = withStyles(theme => ({
  vertical: {
    pointerEvents: 'none',
    paddingBottom: 0,
    marginTop: -theme.spacing(5),
    '& $line': {
      minHeight: theme.spacing(8),
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
    height: theme.spacing(5),
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
