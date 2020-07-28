import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  menuWrapper: {
    background: theme.palette.white.main,
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
    height: `calc(100vh - ${theme.spacing(6)}px)`,
    top: theme.spacing(6),
    paddingTop: theme.spacing(2),
    overflowY: 'auto',
    position: 'sticky',
    '& a': {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.h3.fontSize,
      color: theme.palette.gray.main,
      '& svg': {
        marginRight: theme.spacing(1),
      },
    },
  },
  menu: {
    '& > :last-child': {
      '& a': {
        height: '100%',
      },
      display: 'block',
    },
    marginBottom: theme.spacing(2.25),
  },
  backToList: {
    height: 'auto',
    '& a': {
      paddingLeft: theme.spacing(3),
      borderBottom: 0,
      paddingTop: theme.spacing(2.375),
      paddingBottom: theme.spacing(2.375),
      borderTop: `2px solid ${theme.palette.gray.light}`,
      '& h3, & svg': {
        color: theme.palette.black.main,
      },
    },
  },
  hideButton: {
    position: 'absolute',
    right: -14,
    top: 24,
    zIndex: 10,
  },
}));
