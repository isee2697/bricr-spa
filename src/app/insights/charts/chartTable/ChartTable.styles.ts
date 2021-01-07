import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
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
  row: {
    cursor: 'pointer',

    '&:hover': {
      background: theme.palette.gray.light,
    },
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: theme.typography.h5.fontSize,
  },
  orange: {
    color: theme.palette.orange.main,
  },
  marginRightOne: {
    marginRight: theme.spacing(1),
  },
  paddingLeftHalf: {
    paddingLeft: theme.spacing(0.5),
  },
  inlineBlock: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
