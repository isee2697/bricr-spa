import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  col: {
    borderRight: `1px solid ${theme.palette.gray.light}`,
    minWidth: theme.spacing(11),
    '&:first-child': {
      borderRight: `none`,
    },
    '&:last-child': {
      borderRight: `none`,
    },
  },
  rowHead: {},
  row: {
    display: 'flex',
    height: theme.spacing(8.75),
    alignItems: 'center',
  },
}));
