import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  tableHeaderCell: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: 'none',
  },
  tableCellNoBorderBottom: {
    borderBottom: 'none',
  },
  conditionUnavailable: {
    color: theme.palette.gray.main,
    textDecoration: 'line-through',
  },
  documentsUnavailable: {
    color: theme.palette.gray.main,
    textDecoration: 'line-through',
  },
  dossierCompletePercentage: {
    color: theme.palette.orange.main,
  },
  actions: {
    marginTop: theme.spacing(3),
    textAlign: 'right',
  },
  actionButtons: {
    minWidth: theme.spacing(20),
    marginLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
