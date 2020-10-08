import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  icon: {
    position: 'relative',
    width: theme.spacing(6),
    height: theme.spacing(6),
    // background: theme.palette.orange.main,
    background: '#FDE9D7',
    color: '#F59236',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.spacing(1),

    '&::after': {
      content: '" "',
      position: 'absolute',
      width: theme.spacing(1),
      height: theme.spacing(1),
      border: `1px solid ${theme.palette.gray.light}`,
      // background: theme.palette.orange.light,
      background: '#F59236',
      borderRadius: '50%',
    },

    '&.top::after': {
      top: -theme.spacing(0.5),
      left: `calc(50% - ${theme.spacing(0.5)}px)`,
    },

    '&.bottom::after': {
      bottom: -theme.spacing(0.5),
      left: `calc(50% - ${theme.spacing(0.5)}px)`,
    },

    '&.left::after': {
      left: -theme.spacing(0.5),
      top: `calc(50% - ${theme.spacing(0.5)}px)`,
    },

    '&.right::after': {
      right: -theme.spacing(0.5),
      top: `calc(50% - ${theme.spacing(0.5)}px)`,
    },
  },

  line: {
    flexGrow: 1,
    height: 1,
    borderTop: `1px solid ${theme.palette.gray.main}`,
  },

  dashedLine: {
    height: 1,
    width: theme.spacing(2),
    borderTop: `1px dashed ${theme.palette.gray.main}`,
  },

  startCurvedLine: {
    flexGrow: 1,
    borderTop: `1px solid ${theme.palette.gray.main}`,
    borderLeft: `1px solid ${theme.palette.gray.main}`,
    borderTopLeftRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    width: `calc(100% - ${theme.spacing(3)}px)`,
    height: theme.spacing(2.25),
  },

  endCurvedLine: {
    flexGrow: 1,
    borderBottom: `1px solid ${theme.palette.gray.main}`,
    borderRight: `1px solid ${theme.palette.gray.main}`,
    borderBottomRightRadius: theme.spacing(0.5),
    marginRight: theme.spacing(3),
    width: `calc(100% - ${theme.spacing(3)}px)`,
    height: theme.spacing(2.25),
  },
}));
