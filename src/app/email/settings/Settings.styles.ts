import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    marginBottom: 0,
  },
  badge: {
    background: theme.palette.gray.light,
    color: theme.palette.gray.main,
  },
  tableRow: {
    '&:nth-child(odd)': {
      background: theme.palette.gray.light,
    },
    '&:nth-child(even)': {
      background: theme.palette.white.main,
    },
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
      color: theme.palette.error.main,
    },
  },
}));
