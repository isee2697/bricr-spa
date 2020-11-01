import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  goldItem: {
    borderTop: `1px solid ${theme.palette.info.light}`,
    width: theme.spacing(3),
    height: theme.spacing(4.5),
    background: theme.palette.info.light,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&.active:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: theme.spacing(3),
      borderBottom: `${theme.spacing(2.5)}px solid ${theme.palette.gold.main}`,
      borderRight: `${theme.spacing(3)}px solid transparent`,
    },

    '&.active': {
      background: theme.palette.gradientGold.main,
    },
  },
  silverItem: {
    borderTop: `1px solid ${theme.palette.info.light}`,
    width: theme.spacing(3),
    height: theme.spacing(3),
    background: theme.palette.info.light,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&.active:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: theme.spacing(3),
      borderBottom: `${theme.spacing(3)}px solid ${theme.palette.silver.main}80`,
      borderRight: `${theme.spacing(3)}px solid transparent`,
    },

    '&.active': {
      background: theme.palette.gradientSilver.main,
    },
  },
  bronzeItem: {
    borderTop: `1px solid ${theme.palette.info.light}`,
    width: theme.spacing(3),
    height: theme.spacing(2.5),
    background: theme.palette.info.light,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&.active:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: theme.spacing(3),
      borderBottom: `${theme.spacing(2.5)}px solid ${theme.palette.bronze.main}80`,
      borderRight: `${theme.spacing(3)}px solid transparent`,
    },

    '&.active': {
      background: theme.palette.gradientBronze.main,
    },
  },
  label: {
    zIndex: 1,
    color: theme.palette.white.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  count: {
    width: theme.spacing(3),
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold,
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
