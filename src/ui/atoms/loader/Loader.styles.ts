import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    position: 'absolute',
    left: `calc(50% - ${theme.spacing(4)}px)`,
    top: `calc(50% - ${theme.spacing(4)}px)`,
  },
}));
