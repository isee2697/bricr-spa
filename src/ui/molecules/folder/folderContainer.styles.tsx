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
    '&:hover .MuiBadge-root': {
      display: 'block',
    },
  },
  removeBadge: {
    position: 'absolute',
    zIndex: 1,
    top: theme.spacing(1),
    right: theme.spacing(0.5),
    cursor: 'pointer',
    display: 'none',
    '& svg': {
      color: theme.palette.white.main,
      fontSize: '0.75rem',
    },
    '& path': {
      fill: theme.palette.white.main,
    },
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

    '&.blue': {
      background: theme.palette.blueGradients[600],
    },

    '&.aqua': {
      background: theme.palette.aquaGradients[500],
    },

    '&.purple': {
      background: theme.palette.purpleGradients[500],
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
    '&.purple path': {
      stroke: theme.palette.purpleGradients[500],
    },
    '&.aqua path': {
      stroke: theme.palette.aquaGradients[500],
    },
  },
  editBox: {
    width: theme.spacing(11),
    border: `${theme.spacing(0.125)}px solid #28B8FC`,
    height: theme.spacing(2),
    textAlign: 'center',
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    outline: 'none',
  },
  hidden: {
    display: 'none',
  },
}));
