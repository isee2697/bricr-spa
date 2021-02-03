import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  closeIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: theme.spacing(7),
    background: theme.palette.error.main,
    color: theme.palette.white.main,
  },
  checkIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: theme.spacing(7),
    background: theme.palette.success.main,
    color: theme.palette.white.main,
  },
  successPanel: {
    background: theme.palette.gradientPrimary.light,
    color: theme.palette.white.main,
    height: theme.spacing(20),

    '& svg': {
      fontSize: theme.spacing(8),
    },
  },
  errorPanel: {
    background: theme.palette.gradientRed.main,
    color: theme.palette.white.main,
    height: theme.spacing(20),

    '& svg': {
      fontSize: theme.spacing(8),
    },
  },
  columnHeader: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer',

    '&.sorted': {
      color: theme.palette.primary.main,
    },
  },
  columnHeaderIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  columnSortIconPlaceholder: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    display: 'inline-block',
  },
  tableRow: {
    '&:nth-child(odd)': {
      background: theme.palette.gray.light,
    },
  },
  tableCell: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  row: {
    cursor: 'pointer',

    '&:hover': {
      background: theme.palette.gray.light,
    },
  },
  marginRightOne: {
    marginRight: theme.spacing(1),
  },
  inlineBlock: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
