import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  editSwitcher: {
    marginRight: theme.spacing(3),
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
  extraRadioGroup: {
    marginTop: theme.spacing(1.5),
    width: theme.spacing(27),
  },
  extraRadioGroupItem: {
    '&.MuiGrid-item': {
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: theme.spacing(1),
    },
    '&.MuiGrid-item:last-child': {
      marginBottom: 0,
    },
  },
}));
