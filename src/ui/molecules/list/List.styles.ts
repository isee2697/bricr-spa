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
  rowContainer: {
    '&:not(:last-child):after': {
      content: '""',
      display: 'block',
      borderBottom: `1px solid ${theme.palette.gray.light}`,
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    '&:not(:last-child)': {
      borderBottom: `2px solid ${theme.palette.gray.light}`,
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  checkbox: {
    padding,
  },
  item: {
    padding: `22px 16px 22px 0`,
    width: '100%',
  },
  pagination: {
    borderTop: `2px solid ${theme.palette.gray.light}`,
    padding: theme.spacing(2.5),
  },
}));
