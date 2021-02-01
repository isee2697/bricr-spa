import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  tableTopHeader: {
    margin: theme.spacing(0, -2),
    minHeight: theme.spacing(7),
  },
  table: {
    margin: theme.spacing(0, -2),
    width: `calc(100% + ${theme.spacing(4)}px)`,
  },
  tableHeadRow: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: theme.spacing(1.5),
  },
  tableRow: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    minHeight: theme.spacing(7),

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
    minWidth: theme.spacing(5),
    paddingLeft: 0,
  },
  narrowCell: {
    minWidth: theme.spacing(9),
    maxWidth: theme.spacing(9),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0),
  },
  placeholder: {
    height: theme.spacing(7),
    border: `1px dashed ${theme.palette.primary.main}`,
  },
  grayText: {
    color: theme.palette.gray.main,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  mediumText: {
    fontWeight: theme.typography.fontWeightMedium,
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
}));
