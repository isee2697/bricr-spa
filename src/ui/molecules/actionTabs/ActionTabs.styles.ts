import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  badge: {
    '& .MuiBadge-badge': {
      right: -theme.spacing(1.25),
      minWidth: theme.spacing(1),
      padding: theme.spacing(0.25, 0.5, 0, 0.5),
      height: theme.spacing(2),
      textAlign: 'center',
      borderRadius: theme.spacing(1),
    },
  },
}));
