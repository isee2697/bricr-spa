import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, palette }) => ({
  container: {
    position: 'relative',
    backgroundImage: `url(${require('assets/images/grid_dot.png')})`,
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
