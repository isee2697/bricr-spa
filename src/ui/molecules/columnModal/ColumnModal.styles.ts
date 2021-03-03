import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  btnSmall: {
    background: theme.palette.gray.light,
    color: theme.palette.gray.main,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5),
    cursor: 'pointer',
    height: theme.spacing(4),

    '&:hover': {
      background: theme.palette.gray.dark,
    },

    '&.selected': {
      background: theme.palette.gray.main,
      color: theme.palette.white.main,
    },
  },
  searchBox: {
    maxWidth: 'none',
    minHeight: theme.spacing(6.5),
    width: '100%',
    top: 0,
    height: 'unset',
  },
  searchBoxInput: {
    maxWidth: 'none',
    padding: theme.spacing(1.25, 1.75),
    top: 0,
    position: 'unset',
  },
  modalContent: {
    width: theme.spacing(91),
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    position: 'relative',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  modalFooter: {
    borderTop: `1px solid ${theme.palette.gray.light}`,
    padding: theme.spacing(2, 3),
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightBold,
    width: '100%',
    maxWidth: theme.spacing(60),
    marginBottom: theme.spacing(2),
  },
  splitter: {
    height: 1,
    width: '100%',
    maxWidth: theme.spacing(60),
    background: theme.palette.gray.main,
  },
}));

export const useHeaderStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    maxWidth: theme.spacing(60),

    '&.dragging': {
      display: 'none',
    },
  },
  root: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5, 2),
    height: theme.spacing(7),
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    width: '100%',

    '&.dragging': {
      display: 'none',
      marginBottom: 0,
    },
  },
  placeholder: {
    margin: theme.spacing(2, 0),
    height: theme.spacing(7),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
  },
  placeholderItem: {
    width: '100%',
    marginBottom: theme.spacing(2, 0),
    height: theme.spacing(7),
    maxWidth: theme.spacing(60),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
  },
  dragObjectWrapper: {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 1200,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  dragObject: {
    width: '100%',
    marginBottom: theme.spacing(2, 0),
    height: theme.spacing(7),
    maxWidth: theme.spacing(60),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    position: 'absolute',
  },
}));

export const usePlaceholderStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    maxWidth: theme.spacing(60),

    '&.dragging': {
      display: 'none',
    },
  },
  root: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5, 2),
    height: theme.spacing(7),
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    width: '100%',

    '&.dragging': {
      display: 'none',
      marginBottom: 0,
    },
  },
  placeholder: {
    margin: theme.spacing(2, 0),
    height: theme.spacing(7),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
  },
  placeholderItem: {
    width: '100%',
    marginBottom: theme.spacing(2, 0),
    height: theme.spacing(7),
    maxWidth: theme.spacing(60),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
  },
  dragObjectWrapper: {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 1200,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  dragObject: {
    width: '100%',
    marginBottom: theme.spacing(2, 0),
    height: theme.spacing(7),
    maxWidth: theme.spacing(60),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    position: 'absolute',
  },
}));
