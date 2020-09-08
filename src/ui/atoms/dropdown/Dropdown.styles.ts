import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    position: 'relative',
    '& *': {
      userSelect: 'none',
    },
  },
  input: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: spacing(6),
    width: '100%',
    paddingLeft: spacing(2),
    paddingRight: spacing(1),
    backgroundColor: palette.gray.light,
    borderRadius: spacing(1),
    '&.isOpened': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&.disabled': {
      cursor: 'default',
      background: 'rgba(243, 245, 250, .5)',
    },
  },
  value: {
    fontSize: typography.h4.fontSize,
    color: palette.black.main,
    '&.disabled': {
      color: palette.gray.main,
    },
    '&.placeholder': {
      color: 'rgba(130, 141, 184, .5)',
    },
  },
  reversedArrow: {
    transform: 'rotate(180deg)',
    transition: 'all 0.2s',
  },
  menu: {
    display: 'none',
    position: 'absolute',
    marginTop: 1,
    width: '100%',
    backgroundColor: palette.gray.light,
    borderRadius: `0 0 ${spacing(1)}px ${spacing(1)}px`,
    padding: spacing(1),
    '&.isOpened': {
      display: 'block',
    },
    zIndex: 10,
    maxHeight: spacing(21),
    overflow: 'scroll',
  },
  item: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: spacing(7),
    color: palette.gray.main,
    backgroundColor: palette.white.main,
    borderRadius: spacing(1),
    '&.alignLeft': {
      justifyContent: 'flex-start',
      paddingLeft: spacing(2),
    },
    '&.alignRight': {
      justifyContent: 'flex-end',
      paddingRight: spacing(2),
    },
    '&:not(:last-child)': {
      marginBottom: spacing(0.5),
    },
    '&.selected': {
      color: palette.black.main,
      fontWeight: typography.fontWeightMedium,
      background: palette.primary.light,
      border: `1px solid ${palette.primary.main}`,
    },
  },
}));
