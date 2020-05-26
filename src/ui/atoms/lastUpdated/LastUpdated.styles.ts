import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  text: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.gray.main,
    padding: theme.spacing(0.25),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  icon: {
    marginLeft: 'auto',
  },
}));
