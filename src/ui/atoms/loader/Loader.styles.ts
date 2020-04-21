import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    position: 'absolute',
    left: '45%',
    top: '45%',
  },
}));
