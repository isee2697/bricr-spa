import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  subheader: {
    textAlign: 'right',
  },
  sort: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.gray.light,
    marginRight: theme.spacing(2),
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline:focus': {
      borderWidth: 0,
    },
    '& .MuiSelect-select': {
      color: theme.palette.gray.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      padding: theme.spacing(1, 4.5, 1, 1),
    },
  },
}));
