import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  placeholder: {
    border: `1px dashed ${palette.gray.main}`,
    borderRadius: spacing(1),
    background: 'transparent',
    color: palette.gray.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: typography.h5.fontSize,
    padding: spacing(1),
  },
  dragged: {
    border: `1px dashed ${palette.primary.main}`,
    backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
  },
  hovered: {
    backgroundColor: palette.overlay.light,
    backgroundImage: 'none',
  },
}));
