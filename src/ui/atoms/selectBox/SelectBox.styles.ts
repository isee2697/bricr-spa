import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    position: 'relative',
  },
  input: {
    cursor: 'pointer',
    paddingLeft: spacing(2),
    paddingRight: spacing(1),
    backgroundColor: palette.gray.light,
    borderRadius: spacing(1),
    position: 'relative',
    '&.selected': {
      zIndex: 1200,
    },
    '&.disabled': {
      cursor: 'default',
      background: palette.white.light,
    },
  },
  inputInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: spacing(6),
    width: '100%',
    borderRadius: spacing(1),
  },
  inputValue: {
    fontSize: typography.h4.fontSize,
    color: palette.black.main,
    '&.disabled': {
      color: palette.gray.main,
    },
    '&.placeholder': {
      color: palette.info.dark,
    },
  },
  reversedArrow: {
    transform: 'rotate(180deg)',
    transition: 'all 0.2s',
  },
  menuList: {
    padding: 0,
  },
  item: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: spacing(7),
    color: palette.black.main,
    backgroundColor: palette.white.main,
    borderRadius: spacing(1),
    padding: spacing(0, 2),

    '&.alignLeft': {
      justifyContent: 'flex-start',
    },
    '&.alignRight': {
      justifyContent: 'flex-end',
    },
    '&.selected': {
      color: palette.black.main,
      fontWeight: typography.fontWeightMedium,
      background: palette.primary.light,
      border: `1px solid ${palette.primary.main}`,
    },
    '&:hover': {
      background: palette.gray.light,
    },
  },
  autocompleteBack: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: palette.info.dark,
    left: 0,
    top: 0,
    zIndex: 1100,
  },
  blue: {
    color: palette.primary.main,
  },
}));
