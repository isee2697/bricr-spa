import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    background: theme.palette.gray.light,

    '&.draggingOver': {
      backgroundColor: theme.palette.blue.light,
    },
  },
  badge: {
    '& .MuiBadge-badge': {
      right: -theme.spacing(1.25),
      minWidth: theme.spacing(1),
      padding: theme.spacing(0.25, 0.5, 0, 0.5),
      height: theme.spacing(2),
      textAlign: 'center',
      borderRadius: theme.spacing(1),
      background: theme.palette.gray.light,
      color: theme.palette.gray.main,
    },
  },
}));
