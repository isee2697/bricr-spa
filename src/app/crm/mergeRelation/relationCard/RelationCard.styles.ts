import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(theme => ({
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  checkbox: {
    width: theme.spacing(2.5),
  },
  resultContent: {
    background: theme.palette.yellow.light,
  },
  relationWrapper: {
    width: '100%',
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientBlue.light,
  },
  image: {
    height: '100%',
    width: theme.spacing(21),
    minHeight: theme.spacing(25),
  },
  relationContent: {
    padding: theme.spacing(2),
    position: 'relative',
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.black.main,
  },
  divider: {
    height: 2,
    background: theme.palette.white.main,
    borderRadius: 2,
  },
  matchedPercent: {
    position: 'absolute',
    top: theme.spacing(2.5),
    right: theme.spacing(1.5),
    background: theme.palette.white.main,
    border: `2px solid ${theme.palette.green.main}`,
    width: theme.spacing(7.5),
    height: theme.spacing(7.5),
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.green': {
      borderColor: theme.palette.green.main,
    },
    '&.yellow': {
      borderColor: theme.palette.yellow.main,
    },
    '&.red': {
      borderColor: theme.palette.red.main,
    },
  },
  typographyItem: {
    '&.green': {
      color: theme.palette.green.main,
    },
    '&.red': {
      color: theme.palette.red.main,
    },
  },
}));
