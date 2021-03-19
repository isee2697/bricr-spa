import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  card: {
    background: theme.palette.gray.light,
    padding: theme.spacing(1, 0, 1, 1),
  },
  cardItem: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    background: theme.palette.white.main,
    position: 'relative',
  },
  checkmark: {
    width: theme.spacing(1),
    height: theme.spacing(2),
    transform: 'rotate(45deg)',
    borderBottom: `2px solid ${theme.palette.success.main}`,
    borderRight: `2px solid ${theme.palette.success.main}`,
    left: theme.spacing(1),
    position: 'absolute',
  },
  italic: {
    fontStyle: 'italic',
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
