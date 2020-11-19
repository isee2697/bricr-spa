import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fieldIconWrapper: {
    width: theme.spacing(20.5),
    height: theme.spacing(16.25),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  fieldIcon: {
    background: theme.palette.purple.light,
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1),

    '& svg': {
      fontSize: theme.spacing(4),
      color: theme.palette.purple.main,
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
