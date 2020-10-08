import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    width: theme.spacing(39),
  },

  pointTypeItem: {
    width: theme.spacing(27),
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    // padding: theme.spacing(0.75),
  },

  select: {
    flexGrow: 1,
  },

  divider: {
    width: '100%',
    height: 1,
    background: theme.palette.gray.light,
  },
}));
