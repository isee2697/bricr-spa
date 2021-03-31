import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
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
