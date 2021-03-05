import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.gradientBlue.light,
    borderBottomRightRadius: theme.spacing(1),
    borderTopRightRadius: theme.spacing(1),
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderTopLeftRadius: theme.spacing(10),
    borderBottomLeftRadius: theme.spacing(10),
  },
  userAvatar: {
    fontSize: theme.spacing(20),
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
