import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.gradientPrimary.light,
    borderRadius: theme.spacing(1),
  },
  image: {
    borderTopLeftRadius: theme.spacing(1),
    borderBottomLeftRadius: theme.spacing(1),
    width: theme.spacing(21),
    height: theme.spacing(17.625),
  },
  header: {
    paddingBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.white.main}`,
  },
  details: {
    color: theme.palette.gray.main,
    paddingTop: theme.spacing(2),
  },
  paddingTwo: {
    padding: theme.spacing(2),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
