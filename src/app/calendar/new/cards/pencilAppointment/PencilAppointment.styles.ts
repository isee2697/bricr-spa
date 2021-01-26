import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  table: {
    '& .MuiTableCell-head': {
      border: `2px solid ${theme.palette.blue.light}`,
    },
    '& .MuiTableCell-root': {
      border: `2px solid ${theme.palette.blue.light}`,
    },
  },
  whiteBorder: {
    '&:first-child': {
      borderRight: `2px solid ${theme.palette.white.main}`,
    },
    '&:last-child': {
      borderLeft: `2px solid ${theme.palette.white.main}`,
    },
    '&:not(:first-child):not(:last-child)': {
      borderRight: `2px solid ${theme.palette.white.main}`,
      borderLeft: `2px solid ${theme.palette.white.main}`,
    },
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  backBlue: {
    background: theme.palette.blue.light,
  },
}));
