import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.white.main,
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
    height: `calc(100vh - ${theme.spacing(6)}px)`,
    top: theme.spacing(6),
    paddingTop: theme.spacing(10),
    overflowY: 'auto',
    position: 'sticky',
  },
}));
