import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  checkIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    color: theme.palette.white.main,
    background: theme.palette.green.main,

    '& path': {
      fill: theme.palette.white.main,
    },
  },
  closeIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    color: theme.palette.white.main,
    background: theme.palette.red.main,

    '& path': {
      fill: theme.palette.white.main,
    },
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
    top: theme.spacing(0.5),
    left: theme.spacing(5),
  },
  stepContent: {
    marginTop: -theme.spacing(3),
    borderLeft: `2px solid ${theme.palette.green.main}`,
  },
  stepLabelContent: {
    color: theme.palette.black.main,
  },
  timelineStatus: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  green: {
    color: theme.palette.green.main,
  },
  red: {
    color: theme.palette.red.main,
  },
  btnComplete: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    height: theme.spacing(4),
  },
  timelineTitleWrapper: {
    flex: 1,
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
    fontWeight: theme.typography.fontWeightMedium,
  },
  sentToItem: {
    display: 'inline-block',
    height: theme.spacing(4),
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientBlue.light,
    overflow: 'hidden',
  },
  sentToItemAvatar: {
    display: 'inline-block',
  },
  sentToItemName: {
    display: 'inline-block',
    verticalAlign: 'top',
    lineHeight: `${theme.spacing(4)}px`,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
  timelinePoster: {
    color: theme.palette.gray.main,
    marginTop: theme.spacing(4),
  },
  flexGridGrow: {
    flex: 1,
  },
}));
