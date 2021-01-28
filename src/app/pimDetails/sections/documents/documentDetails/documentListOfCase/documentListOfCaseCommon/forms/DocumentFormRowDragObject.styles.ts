import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 1200,
    left: 0,
    top: 0,
    height: '100%',
    width: `calc(100vw - 112px)`,

    [theme.breakpoints.up('sm')]: {
      width: ({ isSidebarVisible }: { isSidebarVisible: boolean }) =>
        isSidebarVisible ? `calc(66.66vw - 112px)` : `calc(100w - 112px)`,
    },
    [theme.breakpoints.up('md')]: {
      width: ({ isSidebarVisible }: { isSidebarVisible: boolean }) =>
        isSidebarVisible ? `calc(75vw - 112px)` : `calc(100w - 112px)`,
    },
    [theme.breakpoints.up('lg')]: {
      width: ({ isSidebarVisible }: { isSidebarVisible: boolean }) =>
        isSidebarVisible ? `calc(83.33vw - 112px)` : `calc(100w - 112px)`,
    },
  },
  tableRow: {
    background: theme.palette.white.main,
    cursor: 'pointer',
    display: 'flex',
    minHeight: theme.spacing(7),
    alignItems: 'center',

    '&.even': {
      background: theme.palette.blue.light,
    },
  },
  fullWidthCell: {
    width: '100%',
  },
  checkboxCell: {
    display: 'flex',
    alignItems: 'center',
    width: theme.spacing(5),
    paddingLeft: 0,
  },
  narrowCell: {
    minWidth: theme.spacing(9),
    maxWidth: theme.spacing(9),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0),
  },
  mediumText: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
