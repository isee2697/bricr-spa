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
      borderColor: theme.palette.gray.main,
      borderWidth: '1px',
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
      display: 'flex',
      justifyContent: 'center',
    },
    '& div:first-child': {
      marginRight: 0,
    },
    '&.selected': {
      '& .MuiCard-root': {
        border: `double ${theme.spacing(0.125)}px transparent`,
        borderRadius: theme.spacing(1),
        backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
      },
      '& .MuiCard-root svg': {
        color: theme.palette.primary.main,
      },
      '& .title': {
        color: theme.palette.black.main,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    '& svg': {
      pointerEvents: 'none',
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
      borderWidth: theme.spacing(0.25),
    },
    '&.selected .MuiCard-root.MuiPaper-rounded': {
      border: `double ${theme.spacing(0.125)}px transparent`,
      borderRadius: theme.spacing(1),
      backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      borderWidth: theme.spacing(0.125),
    },
    '& .title': {
      color: theme.palette.gray.main,
    },
  },
  checkMark: {
    position: 'absolute',
    right: 0,
  },
  card: {
    justifyContent: 'center',
    padding: 0,
    height: theme.spacing(8),
    width: '100%',
    border: `1px solid ${theme.palette.gray.main}`,
    '&.isDisabled': {
      border: `2px solid ${theme.palette.gray.light}`,
    },
    '&.horizontal': {
      flexWrap: 'nowrap',
    },
  },
  icon: {
    '& svg': {
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
      margin: `0 ${theme.spacing(1.5)}px`,
      color: theme.palette.gray.main,
    },
    '&.isSelected svg': {
      color: theme.palette.primary.main,
    },
  },
  title: {
    flex: 1,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    color: theme.palette.black.main,
    '&.isSelected': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '&.isDisabled': {
      color: theme.palette.gray.main,
    },
  },
  box: {
    width: theme.spacing(2.25),
    height: theme.spacing(2.25),
    margin: '3px',
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(0.5),
  },
}));
