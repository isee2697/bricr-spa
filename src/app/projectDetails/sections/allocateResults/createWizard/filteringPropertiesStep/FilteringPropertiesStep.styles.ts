import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
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
  projectsWrapper: {
    background: theme.palette.gray.light,
    padding: theme.spacing(1, 2, 0),
  },
  project: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  projectLabel: {
    color: theme.palette.gray.main,
    marginRight: theme.spacing(0.5),
  },
  projectTitle: {
    marginRight: theme.spacing(1),
  },
  objectTypeProject: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
  },
  objectTypeProjectLabel: {
    color: theme.palette.gray.main,
    marginRight: theme.spacing(0.5),
  },
  objectTypeProjectTitle: {
    marginRight: theme.spacing(1),
  },
  objectTypeProjectHeader: {
    marginTop: theme.spacing(1),
  },
  objectTypeProjectItems: {
    marginBottom: theme.spacing(5),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
