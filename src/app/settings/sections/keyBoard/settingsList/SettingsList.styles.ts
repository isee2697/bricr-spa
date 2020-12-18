import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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

    '&:hover': {
      background: theme.palette.gray.light,
    },
  },
  marginLeftHalf: {
    marginLeft: theme.spacing(0.5),
  },
  marginRightOne: {
    marginRight: theme.spacing(1),
  },
  inlineBlock: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
