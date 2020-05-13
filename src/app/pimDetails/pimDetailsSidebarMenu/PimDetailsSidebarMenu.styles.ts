import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.white.main,
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
    height: `calc(100vh - ${theme.spacing(6)}px)`,
    top: theme.spacing(6),
    paddingTop: theme.spacing(2),
    overflowY: 'auto',
    position: 'sticky',
    '& a': {
      textDecoration: 'none',
    },
    '& .MuiList-root > :last-child': {
      display: 'block',
      marginTop: theme.spacing(3),
    },
  },
  hideMenu: {
    marginBottom: theme.spacing(2),
    borderBottom: 0,
    marginLeft: theme.spacing(3),
  },
  backToList: {
    paddingLeft: theme.spacing(3),
    borderBottom: 0,
    marginTop: -theme.spacing(1),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    borderTop: `1px solid ${theme.palette.gray.light}`,
    '& h3, & svg': {
      color: theme.palette.black.main,
    },
  },
}));
