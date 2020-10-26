import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    flex: '1 1',
  },
  placeholder: {
    margin: theme.spacing(2, 0),
    height: theme.spacing(7),
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),

    '&.no-top-margin': {
      marginTop: 0,
    },
  },
}));
