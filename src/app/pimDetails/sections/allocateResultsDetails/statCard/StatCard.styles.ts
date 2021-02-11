import { makeStyles } from '@material-ui/core';

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
  content: {
    padding: 0,

    '&:last-child': {
      paddingBottom: theme.spacing(1),
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 2.75, 0),
    width: '100%',
  },
  image: {
    width: theme.spacing(22),
    height: theme.spacing(13),
    borderRadius: theme.spacing(0.5),
  },
  allocatedRelation: {
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    borderRadius: '1px',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),

    '&:last-child': {
      borderBottom: 'none',
    },
  },
  allocatedRelationCheckbox: {
    padding: 0,
    marginRight: theme.spacing(1.5),
  },
  checkIconWrapper: {
    background: theme.palette.green.main,
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: theme.spacing(1),
    color: theme.palette.white.main,
  },
  checkIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  btnShowHide: {
    cursor: 'pointer',
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  gray: {
    color: theme.palette.gray.main,
  },
  before: {
    borderRadius: '50%',
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: `3px solid ${theme.palette.green.main}`,
    background: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
  },
  after: {
    borderRadius: '50%',
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: `3px solid ${theme.palette.red.main}`,
    background: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
