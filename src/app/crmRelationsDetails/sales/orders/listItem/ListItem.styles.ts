import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      margin: theme.spacing(0, 2),
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    },

    '&.withdrawn': {
      filter: 'grayscale(1)',
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 2.75, 0),
  },
  image: {
    width: theme.spacing(13.25),
    height: theme.spacing(18.75),
    filter: `drop-shadow(-${theme.spacing(0.25)}px ${theme.spacing(0.5)}px ${theme.spacing(0.5)}px ${
      theme.palette.black.main
    }B0)`,
  },
  orderImage: {
    width: theme.spacing(17.75),
    height: theme.spacing(11.25),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
