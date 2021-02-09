import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(9),

    '&.pointerCursor': {
      cursor: 'pointer',
    },
  },
  avatarPlaceholder: {
    width: theme.spacing(13),
    height: theme.spacing(9),
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientGray.main,

    '&.dragOver': {
      background: theme.palette.gradientPrimary.light,
    },
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  planItem: {
    position: 'relative',

    '&:hover .badge': {
      display: 'block',
    },
    '& .badge': {
      display: 'none',
    },
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: theme.spacing(0.75),
    cursor: 'pointer',
  },
  badgeIcon: {
    color: theme.palette.white.main,
    fontSize: '0.75rem',
    '& path': {
      fill: theme.palette.white.main,
    },
  },
}));
