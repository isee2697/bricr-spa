import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  searchField: {
    background: theme.palette.gray.light,
    height: theme.spacing(5),
    borderRadius: theme.spacing(0.5),

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
    '&:not(.selected) .MuiInput-underline': {
      borderColor: 'transparent',
    },
  },
  locationLabel: {
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(1),
  },
  radiusLabel: {
    marginBottom: theme.spacing(1),
    color: theme.palette.gray.main,
  },
}));
