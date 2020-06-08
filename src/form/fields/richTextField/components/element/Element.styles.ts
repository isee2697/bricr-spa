import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  blockquote: {
    marginLeft: 0,
    paddingLeft: theme.spacing(2),
    borderLeft: `2px solid ${theme.palette.gray.main}`,
    color: theme.palette.gray.main,
    ...theme.typography.h3,
  },
}));
