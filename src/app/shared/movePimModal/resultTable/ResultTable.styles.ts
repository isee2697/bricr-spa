import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(() => ({
  table: {
    '& .MuiTableCell-root': {
      border: 'none',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    },
  },
}));
