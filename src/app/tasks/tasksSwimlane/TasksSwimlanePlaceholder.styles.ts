import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    flex: '1 1',
  },
  placeholder: {
    height: theme.spacing(13),
    background: 'linear-gradient(315deg, rgba(10, 87, 233, 0.1) 0%, rgba(159, 192, 255, 0.1) 100%)',
    border: `1px dashed #0A57E9`,
    borderRadius: theme.spacing(1),
  },
}));
