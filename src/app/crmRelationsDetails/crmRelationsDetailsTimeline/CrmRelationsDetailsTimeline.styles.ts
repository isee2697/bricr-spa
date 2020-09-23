import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    flex: '1 1 auto',
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
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
      padding: '8px 36px 8px 8px',
    },
  },
  noBorder: {
    border: 'none',
  },
}));
