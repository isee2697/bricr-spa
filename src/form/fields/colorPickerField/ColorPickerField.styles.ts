import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  colorCircle: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    backgroundColor: 'red',
  },
}));
