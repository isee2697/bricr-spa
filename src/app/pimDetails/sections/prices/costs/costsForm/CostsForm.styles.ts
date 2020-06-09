import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  sections: {
    '& .MuiGrid-root + .MuiBox-root': {
      marginTop: theme.spacing(4),
    },
  },
}));
