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
  sortIcon: {
    marginLeft: theme.spacing(2),
  },
  settingRow: {
    cursor: 'pointer',
  },
  settingIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    background: theme.palette.gray.light,
    borderRadius: theme.spacing(1),
  },
}));
