import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  iconWrapper: {
    position: 'relative',
    zIndex: 1,
    width: theme.spacing(11),
    height: theme.spacing(9),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  icon: {
    position: 'absolute',
    zIndex: -1,
    width: theme.spacing(11),
    height: theme.spacing(9),
  },
  addWrapper: {
    alignItems: 'center',
  },
  iconBadge: {
    marginTop: theme.spacing(2),
    color: theme.palette.white.main,
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(4),
    width: 'fit-content',
    height: 'fit-content',
    minWidth: theme.spacing(2),
    textAlign: 'center',
    padding: `0px ${theme.spacing(0.5)}px`,
    ...theme.typography.h6,

    '&.primary': {
      background: theme.palette.blueGradients[600],
    },

    '&.secondary': {
      background: theme.palette.aquaGradients[500],
    },
  },
  addIcon: {
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.gray.main,
  },
  openedWrapper: {
    position: 'absolute',
    top: theme.spacing(-0.5),
    width: theme.spacing(10),
    height: theme.spacing(7),
  },
}));
