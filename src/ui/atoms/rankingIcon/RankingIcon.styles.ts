import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {},
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
