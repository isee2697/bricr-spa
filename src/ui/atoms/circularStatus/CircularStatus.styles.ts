import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '50%',
    background: theme.palette.white.main,
    '& .MuiCircularProgress-root .MuiCircularProgress-svg circle': {
      stroke: 'url(#gradient)',
      fill: theme.palette.gray.light,
      strokeLinecap: 'round',
    },
  },
  gradientOrange: {
    stopColor: theme.palette.orange.main,
  },
  gradientGreen: {
    stopColor: theme.palette.green.main,
  },
  percentageText: {
    fontWeight: theme.typography.fontWeightBold,
    '&.green': {
      color: theme.palette.green.main,
    },
    '&.orange': {
      color: theme.palette.orange.main,
    },
    '&.red': {
      color: theme.palette.red.main,
    },
  },
}));
