import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    '& .MuiGrid-spacing-xs-3 > .MuiGrid-item ': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
}));
