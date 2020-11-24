import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardContent: {
    padding: 0,
  },
  orderItem: {
    padding: theme.spacing(3, 2, 3, 7),
    '&.active': {
      background: theme.palette.yellow.light,
    },
  },
  image: {
    width: theme.spacing(22),
    height: theme.spacing(14),
  },
  matchStrengthLabel: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.gray.main,
  },
  originalPrice: {
    color: theme.palette.gray.main,
    textDecoration: 'line-through',
  },
  chip: {
    color: theme.palette.gray.main,
    background: theme.palette.white.main,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gray: {
    color: theme.palette.gray.main,
  },
  red: {
    color: theme.palette.red.main,
  },
}));
