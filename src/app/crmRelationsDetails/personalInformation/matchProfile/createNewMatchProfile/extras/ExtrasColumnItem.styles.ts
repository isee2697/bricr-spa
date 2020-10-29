import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5, 2),
    height: theme.spacing(7),
    marginBottom: theme.spacing(2),
    cursor: 'pointer',

    '&.no-margin': {
      marginBottom: 0,
    },
    '&.dragging': {
      display: 'none',
    },
  },
  placeholder: {
    margin: theme.spacing(2, 0),
    height: theme.spacing(7),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
  },
}));
