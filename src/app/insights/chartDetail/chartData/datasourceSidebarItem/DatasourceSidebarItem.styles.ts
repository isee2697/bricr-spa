import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  previewItem: {
    position: 'absolute',
    zIndex: -100,
    top: 0,
    left: 0,
  },
  highlightedText: {
    color: palette.red.main,
  },
}));
