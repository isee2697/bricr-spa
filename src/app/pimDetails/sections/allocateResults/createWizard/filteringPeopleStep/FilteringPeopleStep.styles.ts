import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  searchField: {
    background: theme.palette.gray.light,
    height: theme.spacing(5),
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),

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
  criteriaRowIndex: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'center',
    border: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
  },
  criteriaRow: {
    width: '100%',
    justifyContent: 'space-between',
    border: `1px solid ${theme.palette.gray.light}`,
    padding: theme.spacing(2, 3.75, 2, 2),
    borderRadius: theme.spacing(1),
    marginLeft: 0,
  },
  tagsWrapper: {
    background: theme.palette.gray.light,
    padding: theme.spacing(1, 2, 0),
  },
  tag: {
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    background: theme.palette.white.main,
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  marginLeftHalf: {
    marginLeft: theme.spacing(0.5),
  },
  gray: {
    color: theme.palette.gray.main,
  },
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
