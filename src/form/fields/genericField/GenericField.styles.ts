import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  label: {
    '&.MuiInputLabel-root.MuiInputLabel-outlined.MuiInputLabel-shrink': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));
