import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  scrollable: {
    right: -theme.spacing(1),
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    color: theme.palette.white.main,
    background: theme.palette.green.main,
  },
  closeIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    color: theme.palette.white.main,
    background: theme.palette.red.main,
  },
  stepperWrapper: {
    paddingBottom: '0px !important',
  },
  stepper: {
    paddingLeft: 0,
    marginRight: theme.spacing(2),
  },
  stepConnector: {
    padding: 0,
  },
  stepLabel: {
    position: 'relative',
  },
  stepLabelContainer: {
    position: 'absolute',
    top: 0,
    left: 40,
  },
  stepLabelContent: {
    color: theme.palette.black.main,
  },
  timelineStatus: {
    fontWeight: theme.typography.fontWeightBold,
  },
  green: {
    color: theme.palette.green.main,
  },
  red: {
    color: theme.palette.red.main,
  },
  timelineDate: {
    color: theme.palette.gray.main,
  },
  timelineTime: {
    color: theme.palette.gray.main,
  },
  timelineTitleIcon: {
    background: theme.palette.gray.light,
  },
  timelineTitle: {
    marginLeft: theme.spacing(1),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
