import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.gray.main,
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    height: '100%',
    cursor: 'pointer',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tile: {
    color: theme.palette.gray.main,
    border: `${theme.spacing(0.125)}px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    flex: ({ isSmallSize }: { isSmallSize: boolean }) => (isSmallSize ? 'initial' : '1 1 100%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    '& + .title': {
      fontSize: theme.typography.h5.fontSize,
      lineHeight: theme.typography.h5.lineHeight,
      marginTop: theme.spacing(1),
      display: 'flex',
      color: theme.palette.black.main,
      textAlign: 'center',
      flex: ({ isSmallSize }: { isSmallSize: boolean }) => (isSmallSize ? 'initial' : '1 1 100%'),
    },
  },
  children: {
    padding: theme.spacing(1.875),
    display: 'flex',
  },
  disabled: {
    borderColor: theme.palette.gray.light,
    pointerEvents: 'none',

    '& + .title': {
      color: theme.palette.gray.main,
    },
  },
  preventClick: {
    pointerEvents: 'none',
  },
}));
