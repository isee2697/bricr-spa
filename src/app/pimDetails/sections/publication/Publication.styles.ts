import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  hideSidebarButton: {
    background: theme.palette.white.main,
    boxShadow: theme.shadows[1],
    marginRight: theme.spacing(1),
  },
  columnHeader: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer',

    '&.sorted': {
      color: theme.palette.primary.main,
    },
  },
  columnHeaderIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  row: {
    cursor: 'pointer',
    whiteSpace: 'break-spaces',

    '&:hover': {
      background: theme.palette.gray.light,
    },
  },
  columnSortIconPlaceholder: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    display: 'inline-block',
  },
  inlineBlock: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  success: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    background: theme.palette.success.main,
    color: theme.palette.white.main,
  },
  error: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    background: theme.palette.error.main,
    color: theme.palette.white.main,
  },
  warning: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    background: theme.palette.warning.main,
    color: theme.palette.white.main,
    fontSize: theme.spacing(3),
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
      padding: theme.spacing(1, 4.5, 1, 1),
    },
  },
  marginRightOne: {
    marginRight: theme.spacing(1),
  },
  paddingLeftHalf: {
    paddingLeft: theme.spacing(0.5),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
