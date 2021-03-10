import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTab-root': {
      minWidth: 90,
    },
  },
  tab: {
    overflow: 'visible',
  },
  activeTabIndicator: {
    background: theme.palette.gradientGreen.main,
  },
  badge: {
    '& .MuiBadge-badge': {
      right: -theme.spacing(1.25),
      minWidth: theme.spacing(1),
      padding: theme.spacing(0.25, 0.5, 0, 0.5),
      height: theme.spacing(2),
      textAlign: 'center',
      borderRadius: theme.spacing(1),
      background: theme.palette.green.main,
      color: theme.palette.white.main,
    },
  },
  badgeCount: {
    width: 'auto',
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
