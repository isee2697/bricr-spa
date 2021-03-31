import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  tableHeaderCell: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableHeaderIcon: {
    fontSize: theme.typography.h4.fontSize,
  },
  tableCellFileName: {
    width: '45%',
  },
  tableCellDate: {
    width: '15%',
  },
  tableCellSize: {
    width: '15%',
  },
  tableCellType: {
    width: '15%',
  },
  fileType: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    background: theme.palette.gray.light,
    borderRadius: theme.spacing(0.5),
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    width: 'fit-content',
  },
}));
