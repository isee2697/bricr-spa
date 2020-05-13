import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    '& *': {
      userSelect: 'none',
    },
    '& .MuiCard-root': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      borderColor: theme.palette.gray.main,
    },
    '& .MuiCard-root svg': {
      width: 40,
      height: 40,
      color: theme.palette.gray.main,
    },
    '& .title': {
      marginTop: theme.spacing(1),
      color: theme.palette.gray.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight,
    },
    '& div:first-child': {
      marginRight: 0,
    },
  },
  selected: {
    '&.MuiCard-root': {
      borderColor: theme.palette.primary.main,
    },
    '&.MuiCard-root svg': {
      color: theme.palette.primary.main,
    },
    '& .title': {
      color: theme.palette.black.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  disabled: {
    pointerEvents: 'none',
    '& .MuiCard-root': {
      borderColor: theme.palette.gray.light,
    },
  },
}));
