import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  iconWrapper: {
    position: 'relative',
    width: 85,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: '85px 70px',
    cursor: 'pointer',
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
  },
}));
