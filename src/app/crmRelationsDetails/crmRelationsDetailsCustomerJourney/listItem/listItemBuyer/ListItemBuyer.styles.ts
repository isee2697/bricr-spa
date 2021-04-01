import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 2.75, 0),
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
  matchStrengthLabel: {
    color: theme.palette.gray.main,
    display: 'inline-block',
    marginRight: theme.spacing(1),
  },
  conditionUnavailable: {
    color: theme.palette.gray.main,
    textDecoration: 'line-through',
  },
  documentsUnavailable: {
    color: theme.palette.gray.main,
    textDecoration: 'line-through',
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
  noMargin: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gray: {
    color: theme.palette.gray.main,
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
