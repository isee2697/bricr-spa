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
  headerSelected: {
    background: theme.palette.gradientPrimary.main,
    borderRadius: theme.spacing(1),
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
  iconPanel: {
    '& svg': {
      color: theme.palette.white.main,
    },
  },
  icon: {
    margin: theme.spacing(0, 1.5, 0, 0.5),
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
