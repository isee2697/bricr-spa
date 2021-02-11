import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  row: {
    cursor: 'pointer',

    '&:nth-child(odd)': {
      background: theme.palette.gray.light,
    },

    '& .MuiTableCell-root': {
      border: 'none',
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 2.75, 0),
  },
  checkbox: {
    padding: 0,
  },
}));
