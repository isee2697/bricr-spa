import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0 `,
  },
  editor: {
    padding: theme.spacing(4),
  },
  disabled: {
    pointerEvents: 'none',
  },
}));
