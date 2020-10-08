import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  image: {
    borderTopLeftRadius: theme.spacing(1),
    borderBottomLeftRadius: theme.spacing(1),
    width: theme.spacing(21),
    height: theme.spacing(24.375),
  },
  panel: {
    background: theme.palette.gradientBlue.light,
    padding: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(1),
    borderTopRightRadius: theme.spacing(1),
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
