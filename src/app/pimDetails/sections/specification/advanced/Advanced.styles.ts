import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    '& .MuiCollapse-container': {
      paddingBottom: 0,
    },
    '& .subtitle': {
      padding: 0,
    },
  },
  checkboxWrapper: {
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  tileButton: {
    width: spacing(8),
    height: spacing(8),
    cursor: 'pointer',
  },
  preventClick: {
    pointerEvents: 'none',
  },
}));
