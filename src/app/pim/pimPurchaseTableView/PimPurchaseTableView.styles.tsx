import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  tableHeaderCell: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: 'none',
    padding: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.gray.light}`,
  },
  tableActionCell: {
    cursor: 'pointer',
  },
  tableHeaderIcon: {
    fontSize: theme.typography.h4.fontSize,
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
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.gray.main,
  },
  tableRow: {
    cursor: 'pointer',
    '& > td': {
      border: 'none',
      padding: theme.spacing(0.5, 1),
    },
    '&.striped > td': {
      background: theme.palette.gray.light,
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
  image: {
    width: theme.spacing(6),
    height: theme.spacing(4),
    marginRight: theme.spacing(2),
    fontSize: '3em',
    borderRadius: '2px',
  },
}));
