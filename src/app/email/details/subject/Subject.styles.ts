import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardContent: {
    '&:last-child': {
      padding: theme.spacing(1.5),
    },
  },
  subjectField: {
    border: 'none',
    marginTop: theme.spacing(0.5),
    marginBottom: 0,

    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1),
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },

    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },

    '& .MuiOutlinedInput-root:hover:not(.Mui-focused):not( .Mui-disabled) .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
