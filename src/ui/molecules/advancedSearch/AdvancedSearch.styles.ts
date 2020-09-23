import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '&.selected': {},
  },
  label: {
    color: theme.palette.gray.main,
    marginBottom: theme.spacing(1),

    '&.selected': {
      color: theme.palette.primary.main,
    },
  },
  textField: {
    background: theme.palette.gray.light,
    height: theme.spacing(6),
    borderRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(4)}px)`,

    '& .MuiInput-underline': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.spacing(0.5),
      height: theme.spacing(6),
    },
    '& .MuiInput-underline:before': {
      border: theme.spacing(),
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: theme.spacing(),
    },
    '& .MuiInput-underline:after': {
      border: theme.spacing(),
    },
    '& .MuiAutocomplete-inputRoot, & .MuiAutocomplete-input': {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      borderRadius: theme.spacing(0.5),
    },

    '&:not(.selected)': {
      // background: 'transparent',
    },

    '&:not(.selected) .MuiInput-underline': {
      borderColor: 'transparent',
    },
  },
  hasFocus: {},
  highlight: {
    color: theme.palette.red.main,
  },
  paper: {
    marginTop: theme.spacing(2) - 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    '& .MuiAutocomplete-listbox': {
      maxHeight: '70vh',
      boxShadow: 'inset 0 4px 4px -4px rgba(159, 192, 255, 0.5)',
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
  autocompleteRoot: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
  autocompletePopper: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `2px solid ${theme.palette.gray.light}`,
  },
  optionIcon: {
    marginRight: theme.spacing(1),
  },
  optionTitle: {
    verticalAlign: 'middle',
  },
  autocompleteBack: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    background: `rgba(130, 141, 184, 0.3)`,
    zIndex: 1200,
  },
}));
