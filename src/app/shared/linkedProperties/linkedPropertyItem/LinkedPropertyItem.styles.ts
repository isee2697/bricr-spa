import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {},
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
    display: 'inline',
    '&.first': {
      marginRight: theme.spacing(1),
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    alignItems: 'center',
    display: 'flex',
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
    '& .MuiSvgIcon-root path': {
      fill: theme.palette.blue.dark,
    },
  },
  image: {
    cursor: 'pointer',
    marginTop: 0,
    minHeight: 0,
    height: theme.spacing(14),
  },
  warning: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.red.main,
    '& .MuiSvgIcon-root path': {
      fill: theme.palette.red.main,
    },
  },
  grayText: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  discount: {
    ...theme.typography.h5,
    textDecorationLine: 'line-through',
    color: theme.palette.gray.main,
  },
  status: {
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.orange.main,
    display: 'block',
  },
  price: {
    fontWeight: theme.typography.fontWeightBold,
  },
  information: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  extraInformation: {
    margin: theme.spacing(2, 0),
  },
  collapse: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
}));
