import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.gray.light,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(4)}px`,
    borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0 `,
    display: 'flex',
    flexDirection: 'row',

    '& div + div': {
      marginLeft: theme.spacing(8),
    },
  },
  disabled: {
    pointerEvents: 'none',
  },
}));
