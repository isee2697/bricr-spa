import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, palette }) => ({
  container: {
    position: 'relative',
  },
  imageContainer: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${require('assets/images/grid_dot.png')})`,
    opacity: 0.5,
  },
  errorContainer: {
    position: 'absolute',
    zIndex: -2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: palette.red.light,
    border: `2px solid ${palette.secondary.main}`,
  },
  title: {
    fontSize: typography.h4.fontSize,
    fontWeight: typography.fontWeightBold,
  },
  ruleButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: typography.h5.fontSize,
    fontWeight: typography.fontWeightMedium,
    color: palette.primary.main,
    cursor: 'pointer',
  },
}));
