import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2, 1),
  },
  tableCellFileName: {
    width: '45%',
    fontSize: theme.typography.h5.fontSize,
  },
  tableCellDate: {
    width: '15%',
    fontWeight: theme.typography.fontWeightBold,
  },
  tableCellSize: {
    width: '15%',
  },
  tableCellType: {
    width: '15%',
  },
  tableCellActions: {
    width: theme.spacing(5),
  },
  tableRow: {
    cursor: 'pointer',
    '&:first-child > td': {
      borderTop: `1px solid ${theme.palette.warmgray.main}`,
    },
    '& > td': {
      padding: theme.spacing(0.5, 1),
    },
  },
  fileType: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    background: theme.palette.white.main,
    borderRadius: theme.spacing(50),
    border: `1px solid ${theme.palette.gray.main}`,
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    width: 'fit-content',
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
  assigned: {
    borderRadius: '50%',
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    border: `3px solid ${theme.palette.green.main}`,
    background: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
  },
  unassigned: {
    borderRadius: '50%',
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    border: `3px solid ${theme.palette.red.main}`,
    background: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
