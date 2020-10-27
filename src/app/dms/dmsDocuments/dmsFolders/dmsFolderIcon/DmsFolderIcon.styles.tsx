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
    backgroundSize: `${theme.spacing(11)}px ${theme.spacing(9)}px`,
    cursor: 'pointer',
  },
  addWrapper: {
    alignItems: 'center',
  },
  iconBadge: {
    marginTop: theme.spacing(2),
    color: theme.palette.white.main,
    background: theme.palette.primary.main,
    borderRadius: 999,
    width: 'fit-content',
    height: 'fit-content',
    minWidth: theme.spacing(2),
    textAlign: 'center',
    padding: `0px ${theme.spacing(0.5)}px`,
    ...theme.typography.h6,

    '&.primary': {
      background: theme.palette.primary.main,
    },

    '&.secondary': {
      background: theme.palette.aqua.dark,
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
    backgroundSize: `${theme.spacing(10)}px ${theme.spacing(7)}px`,
  },
}));
