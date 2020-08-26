import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  activeNotificationIcon: {
    backgroundColor: '#4444 !important',
  },
  notificationsMenu: {
    minWidth: theme.spacing(45),
  },
  emptyNotificationsImageEmo: {
    fontSize: 48,
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
      marginTop: '0px',
      marginBottom: '0px',
      fontWeight: '600',
      '&:first-child': {
        marginBottom: theme.spacing(1),
      },
    },
  },
}));
