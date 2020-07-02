import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  spacing: {
    padding: theme.spacing(1, 0, 1, 0),
  },
  label: {
    fontSize: theme.typography.h4.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
    color: theme.palette.gray.main,
    margin: theme.spacing(3, 0, 1),
    display: 'inline-block',
  },
  activeLabel: {
    color: theme.palette.black.main,
  },
}));
