import { makeStyles } from '@material-ui/core/styles';

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

    '&:nth-child(2n + 1)': {
      background: theme.palette.gray.light,
    },
  },
  avatar: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
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
}));
