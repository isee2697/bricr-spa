import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[1],
    background: theme.palette.white.main,
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(0.125)}px solid ${theme.palette.orange.main}`,
    backgroundColor: theme.palette.orange.light,
    color: theme.palette.orange.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  rightSection: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  undoRedo: {
    marginRight: theme.spacing(3),
    '& svg': {
      fill: 'none',
      fontSize: theme.spacing(2),
    },
    '& button + button': {
      marginLeft: theme.spacing(3),
    },
  },
  newButton: {
    marginRight: theme.spacing(3),
  },
}));
