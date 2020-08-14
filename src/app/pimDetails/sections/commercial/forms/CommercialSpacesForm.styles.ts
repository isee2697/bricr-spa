import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  radio: {
    marginTop: theme.spacing(3),
  },
  fields: {
    padding: 0,
    '& .MuiGrid-item': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  checkbox: {
    marginTop: theme.spacing(5),
  },
}));
