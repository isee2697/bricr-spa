import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fontWeightBolder: {
    fontWeight: theme.typography.fontWeightBolder,
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
  content: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    overflowY: 'auto',
  },
}));
