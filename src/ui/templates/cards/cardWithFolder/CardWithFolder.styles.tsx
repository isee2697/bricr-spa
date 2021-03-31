import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  avatarIcon: {
    marginRight: theme.spacing(1),
  },
  backBtnWrapper: {
    position: 'relative',
    width: theme.spacing(5.25),
    height: theme.spacing(5.25),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backBtn: {
    position: 'absolute',
    zIndex: -1,
    width: theme.spacing(5.25),
    height: theme.spacing(5.25),
  },
  backBtnIcon: {
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.white.main,
    cursor: 'pointer',
    position: 'relative',
    top: theme.spacing(0.5),
  },
  searchBoxWrapper: {
    position: 'relative',
  },
  searchBox: {
    maxWidth: theme.spacing(42.5),
    minWidth: theme.spacing(42.5),
    width: theme.spacing(42.5),
    top: 0,
  },
  listItem: {
    marginBottom: theme.spacing(2.5),
  },
  actionButtons: {
    background: theme.palette.gray.light,
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    padding: theme.spacing(2),
  },
  listContainer: {
    padding: theme.spacing(2),
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
  count: {
    marginLeft: theme.spacing(2),
    padding: 0,
    color: theme.palette.gray.main,
    background: theme.palette.gray.light,

    '& > .MuiChip-label': {
      padding: theme.spacing(0, 1.5),
      fontSize: theme.typography.h4.fontSize,
    },
  },
}));
