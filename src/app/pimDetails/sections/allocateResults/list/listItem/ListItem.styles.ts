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
    padding: `${theme.spacing(2.75)}px ${theme.spacing(2)}px ${theme.spacing(2.75)}px 0`,
    width: '100%',
  },
  gray: {
    color: theme.palette.gray.main,
  },
  green: {
    color: theme.palette.green.main,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  before: {
    borderRadius: '50%',
    width: theme.spacing(4),
    height: theme.spacing(4),
    border: `1.5px solid ${theme.palette.green.main}`,
    background: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
  },
  after: {
    borderRadius: '50%',
    width: theme.spacing(4),
    height: theme.spacing(4),
    border: `1.5px solid ${theme.palette.red.main}`,
    background: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
