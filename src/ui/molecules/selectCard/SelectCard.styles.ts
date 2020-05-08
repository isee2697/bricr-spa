import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    boxShadow: 'none',
    borderColor: theme.palette.gray.light,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    display: 'inline-flex',
    cursor: 'pointer',
    '& > *:first-child': {
      marginRight: theme.spacing(2),
    },
    '& > button': {
      marginLeft: 'auto',
    },
  },
  selected: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& > button': {
      backgroundColor: theme.palette.white.main,
      borderColor: theme.palette.primary.main,
    },
  },
  regular: {
    width: `calc(25% - ${theme.spacing(2)}px)`,
  },
  fullWidth: {
    width: `calc(100% - ${theme.spacing(2)}px)`,
  },
  centered: {
    justifyContent: 'center',
  },
}));
