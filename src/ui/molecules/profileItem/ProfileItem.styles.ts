import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5, 0, 0, 0),
    '& .MuiGrid-item:first-child': {
      paddingLeft: 0,
    },
    cursor: 'pointer',
  },
  inActive: {
    filter: 'grayscale(1)',
  },
  right: {
    marginLeft: 'auto',
    marginRight: theme.spacing(3),
  },
  contain: {
    flexGrow: 1,
    marginRight: theme.spacing(3),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    height: theme.spacing(18),
    width: theme.spacing(18),
    borderRadius: theme.spacing(1),
  },
  infoContainer: {
    marginBottom: theme.spacing(1),
    '& .MuiChip-root': {
      marginRight: theme.spacing(1),
    },
  },
  notesContainer: {
    color: theme.palette.red.main,

    '& .MuiSvgIcon-root path': {
      fill: theme.palette.red.main,
    },
  },
  info: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.gray.main,
  },
  chip: {
    backgroundColor: theme.palette.gray.main,
    color: theme.palette.white.main,
  },
  function: {
    position: 'absolute',
    bottom: theme.spacing(2.5),
    left: theme.spacing(2),
    '& .MuiChip-root': {
      width: theme.spacing(14),
    },
  },
}));
