import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'relative',
  },
  highlightedText: {
    color: palette.red.main,
  },
  previewItem: {
    position: 'absolute',
    zIndex: -100,
    left: 0,
  },
}));
