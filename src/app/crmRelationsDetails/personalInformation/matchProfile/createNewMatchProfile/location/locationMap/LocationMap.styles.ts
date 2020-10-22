import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  map: {
    height: '100%',
  },
  container: {
    position: 'relative',
    height: spacing(43.75),
  },
  disabledOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    background: palette.white.light,
  },
}));
