import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  rightItem: {
    marginLeft: 'auto',
    '& > *': {
      display: 'inline',
    },
    '& > div': {
      marginLeft: theme.spacing(1),
    },
    '& .MuiChip-root': {
      padding: theme.spacing(0.25),
    },
  },
  date: {
    color: theme.palette.gray.main,
  },
  subTitle: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.gray.main,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    alignItems: 'center',
    display: 'flex',
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
    '& .MuiSvgIcon-root path': {
      fill: theme.palette.green.main,
    },
  },
  image: {
    cursor: 'pointer',
  },
  logo: {
    backgroundColor: theme.palette.white.main,
    height: theme.spacing(4),
    width: theme.spacing(12),
    borderBottomRightRadius: theme.spacing(0.5),
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  stats: {
    marginLeft: 'auto',
    width: theme.spacing(12),
    backgroundColor: theme.palette.black.light,
    flexDirection: 'column',
  },
  statsText: {
    color: theme.palette.white.main,
    fontWeight: theme.typography.fontWeightBold,
    width: '100%',
    textAlign: 'center',
    margin: theme.spacing(1, 0, 1, 0),
  },
  warning: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: theme.palette.red.main,
    '& .MuiSvgIcon-root path': {
      fill: theme.palette.red.main,
    },
  },
  grayText: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  price: {
    '&:first-child': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  information: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  extraInformation: {
    margin: theme.spacing(2, 0),
  },
}));
