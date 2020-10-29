import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: 2,
    borderRadius: 1,
  },
  barGray: {
    background: theme.palette.gray.light,
  },
  barPrimary: {
    background: theme.palette.gradientPrimary.main,
  },
  barOrange: {
    background: theme.palette.orange.main,
  },
}));
