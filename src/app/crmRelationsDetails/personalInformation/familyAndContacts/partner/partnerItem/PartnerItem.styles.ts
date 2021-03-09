import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  inactive: {
    mixBlendMode: 'luminosity',
  },
  chipWrapper: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    bottom: theme.spacing(2),
  },
  inactiveChip: {
    maxWidth: theme.spacing(15),
    height: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.gray.main,
    border: `1px solid ${theme.palette.gray.main}`,
    background: theme.palette.white.main,
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
