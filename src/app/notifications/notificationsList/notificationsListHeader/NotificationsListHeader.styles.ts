import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    '&.selected': {
      background: theme.palette.gradientPrimary.main,
      borderRadius: theme.spacing(1),
    },
  },
  selectAll: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: 'pointer',
    display: 'inline-block',
    userSelect: 'none',
  },
  itemsSelected: {
    display: 'inline',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.white.main,
  },
  badge: {
    display: 'inline',
    borderRadius: theme.spacing(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: theme.spacing(3),
    height: theme.spacing(3),
    width: 'auto',
    padding: theme.spacing(0, 1),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    background: theme.palette.white.main,
    fontSize: theme.typography.h4.fontSize,
  },
  sorting: {
    backgroundColor: theme.palette.gray.light,
    marginRight: theme.spacing(2),
    height: theme.spacing(4),
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline:focus': {
      borderWidth: 0,
    },
    '& .MuiSelect-select': {
      color: theme.palette.gray.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(4.5),
      height: theme.spacing(4),
      lineHeight: `${theme.spacing(4)}px`,
    },
  },
  iconPanel: {
    '& svg': {
      color: theme.palette.white.main,
    },
  },
  icon: {
    margin: theme.spacing(0, 1.5, 0, 0.5),
  },
  checkbox: {
    padding: theme.spacing(2.5),
    marginLeft: -theme.spacing(2),
  },
  disabled: {
    cursor: 'default',
  },
  menu: {
    '& .MuiMenuItem-root': {
      borderBottom: `solid ${theme.spacing(0.25)}px ${theme.palette.gray.light}`,
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: 'flex',
      alignContent: 'center',
    },
    '& .MuiMenuItem-root .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
    '& .MuiMenuItem-root.delete, & .MuiMenuItem-root.delete .MuiSvgIcon-root path ': {
      color: theme.palette.red.main,
      fill: theme.palette.red.main,
    },
  },
}));
