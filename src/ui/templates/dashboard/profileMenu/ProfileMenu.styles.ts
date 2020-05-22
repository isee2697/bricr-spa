import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  badge: {
    '& .MuiBadge-badge': {
      top: '50%',
      right: '-8px',
      background: 'transparent',
      '& > .MuiSvgIcon-root': {
        width: 10,
        height: 10,
      },
    },
  },
}));
