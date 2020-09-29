import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  tableHeaderCell: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: 'none',
  },
  tableCellDate: {
    fontSize: theme.typography.h4.fontSize,
  },
  tableCellLocation: {
    fontSize: theme.typography.h4.fontSize,
  },
  avatarWithName: {
    display: 'inline-block',
    background: theme.palette.gradientBlue.light,
    borderRadius: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
  avatarIcon: {
    display: 'inline-block',
    marginRight: theme.spacing(0.5),
    verticalAlign: 'middle',
  },
  tableCellStatus: {
    '&.error': {
      color: theme.palette.error.main,
    },
  },
  actions: {
    marginTop: theme.spacing(3),
    textAlign: 'right',
  },
  actionButtons: {
    marginLeft: theme.spacing(1),
    padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
  },
}));
