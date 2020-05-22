import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    borderWidth: theme.spacing(0.25),
    position: 'relative',
    minHeight: theme.spacing(17),
  },
  input: {
    opacity: 0,
    position: 'absolute',
  },
  focus: {
    borderColor: theme.palette.primary.main,
  },
  error: {
    borderColor: theme.palette.red.main,
    color: theme.palette.red.main,
  },
  disabled: {
    cursor: 'default',
  },
  adornment: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h3.fontSize,
  },
}));
