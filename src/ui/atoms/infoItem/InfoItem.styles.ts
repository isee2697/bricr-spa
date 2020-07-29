import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    borderRightWidth: theme.spacing(0.125),
    borderRightColor: theme.palette.gray.light,
    borderRightStyle: 'solid',
    padding: theme.spacing(1),
    '& .MuiTypography-root': {
      width: '100%',
      textAlign: 'center',
    },
    '& .MuiTypography-h3': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '&.red .MuiTypography-h3': {
      color: theme.palette.red.main,
    },
    '&.orange .MuiTypography-h3': {
      color: theme.palette.orange.main,
    },
    '&.green .MuiTypography-h3': {
      color: theme.palette.green.main,
    },
    '& .MuiTypography-h6': {
      color: theme.palette.gray.main,
    },
    '&:last-child': {
      border: 'none',
    },
  },
}));
