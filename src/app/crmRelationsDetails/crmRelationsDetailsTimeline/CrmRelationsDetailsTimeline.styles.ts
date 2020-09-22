import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    flex: '1 1 auto',
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
  subheader: {
    textAlign: 'right',
  },
  sort: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.gray.light,
    marginRight: theme.spacing(2),
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline:focus': {
      borderWidth: 0,
    },
    '& .MuiSelect-select': {
      color: theme.palette.gray.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      padding: '8px 36px 8px 8px',
    },
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
    // position: 'absolute',
    top: theme.spacing(0.5),
    left: 40,
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
  btnComplete: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    height: theme.spacing(4),
  },
  green: {
    color: theme.palette.green.main,
  },
  red: {
    color: theme.palette.red.main,
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
    background: 'linear-gradient(315deg, rgba(10, 87, 233, 0.1) 0%, rgba(159, 192, 255, 0.1) 100%)',
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
    marginTop: theme.spacing(4),
  },
  flexGridGrow: {
    flex: 1,
  },
  noBorder: {
    border: 'none',
  },
}));
