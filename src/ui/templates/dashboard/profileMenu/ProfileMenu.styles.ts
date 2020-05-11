import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  badge: {
    '& .MuiBadge-badge': {
      top: '50%',
      right: '-10px',
      background: 'transparent',
    },
  },
}));
