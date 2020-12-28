import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  index: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: theme.spacing(3),
    border: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
  },
  title: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));
