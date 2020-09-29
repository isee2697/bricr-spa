import makeStyles from '@material-ui/core/styles/makeStyles';

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
  itemNo: {
    color: theme.palette.gray.main,
    border: `2px solid ${theme.palette.gray.light}`,
    borderRadius: '50%',
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(2.5)}px`,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    width: theme.spacing(22),
    height: theme.spacing(14),
    marginRight: theme.spacing(2),
    fontSize: theme.spacing(5),
  },
  createdTime: {
    color: theme.palette.gray.main,
  },
  property: {
    display: 'inline-block',
    marginRight: theme.spacing(2),
    color: theme.palette.gray.main,
  },
  price: {
    marginTop: theme.spacing(2),
  },
  matchStrenthLabel: {
    color: theme.palette.gray.main,
    display: 'inline-block',
    marginRight: theme.spacing(1),
  },
  viewings: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
