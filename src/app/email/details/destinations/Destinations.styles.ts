import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardContent: {
    '&:last-child': {
      padding: 0,
    },
  },
  searchBoxWrapper: {
    position: 'relative',
  },
  searchBox: {
    maxWidth: 'none',
    minHeight: theme.spacing(6.5),
    width: '100%',
    top: 0,
  },
  searchBoxInput: {
    maxWidth: 'none',
    padding: theme.spacing(1.25, 1.75),
    top: 0,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  paper: {
    marginTop: theme.spacing(2) - 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    '& .MuiAutocomplete-listbox': {
      maxHeight: '70vh',
      boxShadow: `inset 0 ${theme.spacing(0.5)}px ${theme.spacing(0.5)}px -${theme.spacing(
        0.5,
      )}px rgba(159, 192, 255, 0.5)`,
    },
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(2),
      width: '80vw',
      position: 'fixed',
      left: '5vw',
    },
    '&::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: theme.spacing(2) - 1,
      background: theme.palette.white.main,
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
  textField: {
    background: theme.palette.gray.light,
    minWidth: theme.spacing(21),
    maxWidth: theme.spacing(21),
    borderRadius: theme.spacing(),
    position: 'absolute',
    top: theme.spacing(2),
    '& .MuiAutocomplete-inputRoot, & .MuiAutocomplete-input': {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      borderRadius: theme.spacing(),
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
      height: '1em',
    },
  },
  highlight: {
    color: theme.palette.red.main,
  },
  badge: {
    '& .MuiBadge-badge': {
      minWidth: theme.spacing(1),
      padding: theme.spacing(0.25, 0.5, 0, 0.5),
      height: theme.spacing(2),
      textAlign: 'center',
      borderRadius: theme.spacing(1),
      background: theme.palette.primary.main,
      color: theme.palette.white.main,
    },
  },
  badgeCount: {
    width: 'auto',
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '&.red': {
      color: theme.palette.error.main,
    },
  },
}));
