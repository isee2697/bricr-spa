import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  placeholder: {
    background: theme.palette.gradientBlue.light,
    border: `1px dashed ${theme.palette.primary.main}`,
  },
}));
