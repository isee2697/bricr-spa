import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      margin: theme.spacing(0, 2),
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 2.75, 0),
  },
  image: {
    width: theme.spacing(13.25),
    height: theme.spacing(18.75),
    filter: `drop-shadow(-${theme.spacing(0.25)}px ${theme.spacing(0.5)}px ${theme.spacing(0.5)}px ${
      theme.palette.black.main
    }B0)`,

    '&.Overdue': {
      border: `1px solid ${theme.palette.red.main}`,
    },
  },
  chip: {
    color: theme.palette.gray.main,
  },
  statusChangedDateChip: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.white.main,

    '&.Approved': {
      background: theme.palette.yellow.main,
    },
    '&.Rejected': {
      background: theme.palette.secondary.main,
    },
    '&.Overdue': {
      background: theme.palette.secondary.main,
    },
    '&.Paid': {
      background: theme.palette.green.main,
    },
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fontWeightBolder: {
    fontWeight: theme.typography.fontWeightBolder,
  },
}));
