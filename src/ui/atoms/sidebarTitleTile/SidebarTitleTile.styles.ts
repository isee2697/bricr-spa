import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  root: {
    padding: spacing(1, 1, 1, 3),
    background: ({ bgColor }: { bgColor: string | undefined }) => bgColor,
    display: 'flex',
  },
  content: {
    marginLeft: spacing(1),
    '& p': {
      margin: spacing(0, 1, 0, 0),
      fontSize: typography.h5.fontSize,
      lineHeight: typography.h5.lineHeight,
      display: '-webkit-box',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
    '& p:first-child': {
      fontWeight: typography.fontWeightBold,
    },
  },
}));
