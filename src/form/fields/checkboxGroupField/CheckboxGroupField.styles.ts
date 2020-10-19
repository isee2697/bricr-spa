import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  itemLabelPart: {
    '&.highlight': {
      color: theme.palette.red.main,
    },
  },
}));
