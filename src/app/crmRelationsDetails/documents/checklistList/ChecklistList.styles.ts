import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  rotatedButton: {
    transform: 'rotate(90deg)',
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
  checklistTable: {
    borderCollapse: 'separate',
    borderSpacing: theme.spacing(0, 1),
  },
  checkIcon: {
    border: `1px solid ${theme.palette.green.main}`,
    color: theme.palette.white.main,
    background: theme.palette.green.main,
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
    borderRadius: theme.spacing(1.5),
  },
  deleteIcon: {
    border: `1px solid ${theme.palette.red.main}`,
    color: theme.palette.white.main,
    background: theme.palette.red.main,
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
    borderRadius: theme.spacing(1.5),
  },
  chip: {
    color: theme.palette.gray.main,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  noBorder: {
    border: 'none',
  },
  borderLeft: {
    borderLeft: `1px solid ${theme.palette.gray.light}`,
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    borderTop: `1px solid ${theme.palette.gray.light}`,
    borderTopLeftRadius: theme.spacing(1),
    borderBottomLeftRadius: theme.spacing(1),
  },
  borderMiddle: {
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    borderTop: `1px solid ${theme.palette.gray.light}`,
  },
  borderRight: {
    borderRight: `1px solid ${theme.palette.gray.light}`,
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    borderTop: `1px solid ${theme.palette.gray.light}`,
    borderTopRightRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
  },
}));
