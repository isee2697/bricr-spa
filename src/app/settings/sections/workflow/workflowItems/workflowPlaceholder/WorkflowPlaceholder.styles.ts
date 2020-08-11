import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  placeholder: {
    border: `1px dashed ${palette.primary.main}`,
    borderRadius: spacing(1),
    backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
  },
  hovered: {
    backgroundColor: palette.overlay.light,
    backgroundImage: 'none',
  },
}));
