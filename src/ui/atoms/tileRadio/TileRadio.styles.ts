import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    '& *': {
      userSelect: 'none',
    },
    '& .MuiCard-root': {
      width: '100%',
      height: '100%',
      display: 'flex',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
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
      color: theme.palette.gray.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight,
      textAlign: 'center',
    },
    '& div:first-child': {
      marginRight: 0,
    },
  },
  selected: {
    '&.MuiCard-root': {
      borderColor: theme.palette.primary.main,
    },
    '&.MuiCard-root path': {
      fill: theme.palette.primary.main,
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
    flexFlow: 'column',
    width: '100%',
    alignItems: 'center',
    '&.hasIcon .title': {
      marginTop: theme.spacing(1),
    },
  },
  disabled: {
    pointerEvents: 'none',
    '& .MuiCard-root': {
      borderColor: theme.palette.gray.light,
    },
  },
}));
