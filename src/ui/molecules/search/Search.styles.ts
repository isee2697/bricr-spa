import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(1em + ${theme.spacing(2)}px)`,
    minWidth: 140,
    maxWidth: 140,
    borderRadius: theme.spacing(),
    '& .filter-icon': {
      display: 'none',
    },
    '&.Mui-focused .filter-icon': {
      display: 'block',
    },
    '& .MuiAutocomplete-clearIndicator:Not(.MuiAutocomplete-clearIndicatorDirty), & fieldset, & fieldset:hover, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
    '&.Mui-focused .MuiAutocomplete-endAdornment .MuiAutocomplete-clearIndicator': {
      right: 20,
    },
  },
  paper: {
    marginTop: theme.spacing(2) - 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    '& .MuiAutocomplete-listbox': {
      maxHeight: '70vh',
      boxShadow: 'inset 0 4px 4px -4px rgba(159, 192, 255, 0.5)',
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
    minWidth: 140,
    maxWidth: 140,
    borderRadius: theme.spacing(),
    position: 'absolute',
    top: theme.spacing(2),

    '& .MuiAutocomplete-inputRoot, & .MuiAutocomplete-input': {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
      height: '1em',
    },
  },
  date: {
    marginLeft: 'auto',
  },
  hasFocus: {
    minWidth: '58vw',
    maxWidth: '58vw',
    zIndex: 20,
  },
  '.MuiAutocomplete-paper': {
    minHeight: 2000,
  },
  highlight: {
    color: theme.palette.red.main,
  },
}));