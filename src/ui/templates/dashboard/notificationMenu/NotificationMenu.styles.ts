import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  notification: {
    cursor: 'pointer',
  },
  activeNotificationIcon: {
    backgroundColor: `${theme.palette.gray.main} !important`,
    '& .MuiSvgIcon-root path': {
      fill: theme.palette.white.main,
    },
  },
  notificationsMenu: {
    minWidth: theme.spacing(45),
  },
  notificationMenuHeader: {
    marginBottom: theme.spacing(2),
  },
  emptyNotificationsImageEmo: {
    fontSize: theme.typography.h1.fontSize,
  },
  emptyNotificationsImage: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  emptyNotificationsText: {
    marginBottom: theme.spacing(2),
    '& p': {
      textAlign: 'center',
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      fontWeight: theme.typography.fontWeightBold,
      '&:first-child': {
        marginBottom: theme.spacing(1),
      },
    },
  },
  btnMarkAllRead: {
    padding: 0,
  },
}));
