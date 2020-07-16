import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  image: {
    width: theme.spacing(20),
    height: theme.spacing(13.75),
    marginRight: theme.spacing(2),
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
  },
  rightItem: {
    marginLeft: 'auto',
  },
  info: {
    flex: 1,
  },
  contactInfo: {
    marginTop: -theme.spacing(3),
    marginBottom: theme.spacing(2),
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
    '& .MuiTypography-h5': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.gray.main,
    },
  },
}));
