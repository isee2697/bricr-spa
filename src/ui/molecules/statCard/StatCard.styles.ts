import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.gray.main,
  },
  value: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: theme.typography.fontWeightMedium,
  },
  optionalValue: {
    color: theme.palette.gray.main,
  },
  success: {
    color: theme.palette.green.main,
  },
  warning: {
    color: theme.palette.orange.main,
  },
  info: { color: theme.palette.gray.main },
  error: {
    color: theme.palette.red.main,
  },
}));
