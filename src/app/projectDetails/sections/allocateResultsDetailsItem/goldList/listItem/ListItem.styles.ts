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
  goldItem: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    borderRadius: '50%',
    border: `1.5px solid ${theme.palette.white.main}`,
    background: theme.palette.info.light,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 4px 0px #0000001A',

    '&.active': {
      background: theme.palette.gradientGold.main,
    },
  },
  silverItem: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    border: `1.5px solid ${theme.palette.white.main}`,
    background: theme.palette.info.light,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 4px 0px #0000001A',
    borderTop: `1px solid ${theme.palette.info.light}`,

    '&.active': {
      background: theme.palette.gradientSilver.main,
    },
  },
  bronzeItem: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    border: `1.5px solid ${theme.palette.white.main}`,
    background: theme.palette.info.light,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 4px 0px #0000001A',
    borderTop: `1px solid ${theme.palette.info.light}`,

    '&.active': {
      background: theme.palette.gradientBronze.main,
    },
  },
  rankingLabel: {
    zIndex: 1,
    color: theme.palette.white.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
