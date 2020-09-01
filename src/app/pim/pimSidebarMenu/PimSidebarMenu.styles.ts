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
  dropdown: {
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(3)}px)`,
    borderRadius: theme.spacing(0.5),
    '& .MuiFilledInput-input': {
      padding: theme.spacing(1.25, 1.5),
    },
    '&.MuiFilledInput-underline:after, &.MuiFilledInput-underline:before': {
      border: 'none',
    },
  },
}));
