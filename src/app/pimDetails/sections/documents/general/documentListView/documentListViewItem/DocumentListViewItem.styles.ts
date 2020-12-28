import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  date: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  grayText: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightLight,
  },
  information: {
    color: theme.palette.gray.main,
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
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
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
}));
