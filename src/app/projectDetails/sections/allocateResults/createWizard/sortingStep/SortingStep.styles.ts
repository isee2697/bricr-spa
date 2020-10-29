import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  criteriaRowIndex: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'center',
    border: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
  },
  criteriaRow: {
    width: '100%',
    justifyContent: 'space-between',
    border: `1px solid ${theme.palette.gray.light}`,
    padding: theme.spacing(2, 3.75, 2, 2),
    borderRadius: theme.spacing(1),
    marginLeft: 0,
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
