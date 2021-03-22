import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {},
  itemRow: {
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    paddingBottom: theme.spacing(0.5),
  },
  counter: {
    display: 'flex',
    borderRadius: theme.spacing(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: theme.spacing(3),
    padding: theme.spacing(0, 1),
    height: theme.spacing(3),
    border: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    marginRight: theme.spacing(1),
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '&.red': {
      color: theme.palette.red.main,
    },
  },
}));
