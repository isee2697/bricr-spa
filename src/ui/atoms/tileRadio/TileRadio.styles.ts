import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    border: `double ${theme.spacing(0.125)}px transparent`,
    borderRadius: theme.spacing(1),
    backgroundImage: `linear-gradient(#ffffff, #ffffff), radial-gradient(circle at top left, ${theme.palette.gray.main}, ${theme.palette.gray.main})`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
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
      border: 'none',
    },
    '& .MuiCard-root svg': {
      width: 40,
      height: 40,
      color: theme.palette.gray.main,
    },
    '& .title': {
      marginTop: theme.spacing(1),
      color: theme.palette.black.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight,
      textAlign: 'center',
    },
    '& div:first-child': {
      marginRight: 0,
    },
    '&.selected': {
      backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
      '& .MuiCard-root path': {
        fill: theme.palette.primary.main,
      },
      '& .title': {
        color: theme.palette.black.main,
        fontWeight: theme.typography.fontWeightBold,
      },
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
    backgroundImage: `linear-gradient(#ffffff, #ffffff), radial-gradient(circle at top left, ${theme.palette.gray.light}, ${theme.palette.gray.light})`,
    '& .title': {
      color: theme.palette.gray.main,
    },
    '&.selected': {
      backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
    },
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
    borderRadius: theme.spacing(50),
  },
}));
