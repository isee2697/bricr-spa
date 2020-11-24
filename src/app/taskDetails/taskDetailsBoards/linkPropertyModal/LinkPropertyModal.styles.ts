import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(({ spacing, typography, palette }) => ({
  searchField: {
    background: palette.gray.light,
    height: spacing(5),
    borderRadius: spacing(0.5),
    marginBottom: spacing(4),

    '& .MuiInput-underline': {
      border: `1px solid ${palette.primary.main}`,
      borderRadius: spacing(0.5),
      height: spacing(6),
    },
    '& .MuiInput-underline:before': {
      border: spacing(),
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: spacing(),
    },
    '& .MuiInput-underline:after': {
      border: spacing(),
    },
    '& .MuiAutocomplete-inputRoot, & .MuiAutocomplete-input': {
      paddingLeft: spacing(0.5),
      paddingRight: spacing(0.5),
      borderRadius: spacing(0.5),
    },
    '&:not(.selected) .MuiInput-underline': {
      borderColor: 'transparent',
    },
  },
  actions: {
    marginTop: spacing(1),
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },
  userList: {
    marginBottom: spacing(2),
  },
}));
