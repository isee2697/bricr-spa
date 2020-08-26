import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  activeNotificationIcon: {
    backgroundColor: '#4444 !important',
  },
  notificationsMenu: {
    minWidth: '360px',
  },
  emptyNotificationsImage: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px',
    marginBottom: '16px',
  },
  emptyNotificationsText: {
    marginBottom: '16px',
    '& p': {
      textAlign: 'center',
      marginTop: '0px',
      marginBottom: '0px',
      fontWeight: '600',
      '&:first-child': {
        marginBottom: '5px',
      },
    },
  },
}));
