import { makeStyles } from '@material-ui/core/styles';

const padding = 19;

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.white.main,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectAll: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: 'pointer',
    display: 'inline-block',
    marginRight: theme.spacing(4),
    userSelect: 'none',
  },
  sorting: {
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
  checkbox: {
    padding,
  },
  pagination: {
    padding: theme.spacing(2.5),
  },
  loading: {
    display: 'flex',
    padding: `${theme.spacing()}px 0`,
    alignItems: 'flex-start',
    '& .MuiIconButton-root.Mui-disabled': {
      paddingTop: 0,
    },
    '& div:first-of-type': {
      flexGrow: 1,
    },
  },
  disabled: {
    cursor: 'default',
  },
}));
