import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  col: {
    borderRight: `1px solid ${theme.palette.gray.light}`,
    minWidth: '88px',
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
    height: '70px',
    alignItems: 'center',
  },
}));
