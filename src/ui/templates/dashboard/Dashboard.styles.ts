import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  menu: {
    marginTop: theme.spacing(2),
    flexGrow: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  menuItem: {
    minWidth: 'auto',
    padding: '6px 0',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  actions: {
    display: 'flex',
    marginRight: -theme.spacing(1),
    '& > *': {
      marginLeft: theme.spacing(3),
    },
    '& > *:last-child': {
      marginLeft: theme.spacing(5),
    },
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(3),
    flex: '1 1 auto',
  },
  sidebar: {
    position: 'sticky',
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    flex: `0 0 ${theme.spacing(8)}px`,
    top: theme.spacing(11),
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderLeft: `2px solid ${theme.palette.white.main}`,
    '& > *:not(:first-child)': {
      marginTop: theme.spacing(2),
    },
  },
  sidebarDivider: {
    height: theme.spacing(6),
  },
}));
