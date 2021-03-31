import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  searchBoxWrapper: {
    position: 'relative',
  },
  searchBox: {
    maxWidth: theme.spacing(50),
    minWidth: theme.spacing(50),
    width: theme.spacing(50),
    top: 0,
  },
  listItem: {
    marginBottom: theme.spacing(2.5),
  },
  page: {
    height: '100%',
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
