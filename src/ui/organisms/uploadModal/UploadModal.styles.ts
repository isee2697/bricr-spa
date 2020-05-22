import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: spacing(22),
    color: palette.gray.main,
    backgroundColor: palette.gray.light,
    border: `1px solid ${palette.gray.main}`,
    borderRadius: spacing(1.25),
    '& svg': {
      width: spacing(6),
      height: spacing(6),
      marginBottom: spacing(1),
    },
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
  },
  previewTitle: {
    marginTop: spacing(3),
    fontSize: typography.h5.fontSize,
    fontWeight: typography.fontWeightBold,
    color: palette.gray.main,
  },
  image: {
    position: 'relative',
    height: spacing(16),
    width: spacing(21),
    marginTop: spacing(1),
    marginRight: spacing(1),
    borderRadius: spacing(1),
    border: `2px solid ${palette.gray.light}`,
    '&:hover .MuiBadge-root': {
      display: 'block',
    },
  },
  removeBadge: {
    position: 'absolute',
    right: 0,
    cursor: 'pointer',
    display: 'none',
    '& svg': {
      color: palette.white.main,
      fontSize: '0.75rem',
    },
    '& path': {
      fill: palette.white.main,
    },
  },
  actions: {
    padding: spacing(2),
    borderTop: `1px solid ${palette.gray.light}`,
  },
}));
