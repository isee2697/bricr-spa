import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    paddingBottom: 0,
    marginBottom: 0,
  },
  lastUpdated: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
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
