import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: theme.spacing(8),
    '& *': {
      userSelect: 'none',
    },
    '& .MuiCard-root': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
      borderColor: theme.palette.gray.light,
      padding: 0,
    },
    '& .MuiCard-root svg': {
      color: theme.palette.gray.main,
    },
    '& .title': {
      textAlign: 'center',
      marginTop: theme.spacing(1),
      color: theme.palette.black.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight,
    },
    '& div:first-child': {
      marginRight: 0,
    },
    '&.selected': {
      '& .MuiCard-root': {
        borderColor: theme.palette.primary.main,
      },
      '& .MuiCard-root svg': {
        color: theme.palette.primary.main,
      },
      '& .title': {
        color: theme.palette.black.main,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  },
  square: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '&.content': {
      marginRight: 0,
    },
    '& svg': {
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
    },
  },
  disabled: {
    pointerEvents: 'none',
    '& .MuiCard-root.MuiPaper-rounded': {
      borderColor: theme.palette.gray.light,
    },
    '& .title': {
      color: theme.palette.gray.main,
    },
  },
  checkMark: {
    position: 'absolute',
    right: 0,
  },
}));
