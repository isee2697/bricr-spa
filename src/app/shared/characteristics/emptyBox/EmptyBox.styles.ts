import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    background: 'linear-gradient(342.61deg, rgba(10, 87, 233, 0.1) 0%, rgba(159, 192, 255, 0.1) 100%);',
    borderRadius: theme.spacing(1),
  },
  text: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.gray.main,
  },
}));
