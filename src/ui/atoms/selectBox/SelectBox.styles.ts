import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    position: 'relative',
    '& *': {
      userSelect: 'none',
    },
  },
  input: {
    position: 'relative',
    cursor: 'pointer',
    paddingLeft: spacing(2),
    paddingRight: spacing(1),
    backgroundColor: palette.gray.light,
    borderRadius: spacing(1),
    '&.isOpened': {
      zIndex: 1500,
    },
    '&.disabled': {
      cursor: 'default',
      background: 'rgba(243, 245, 250, .5)',
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
    width: '100%',
    backgroundColor: palette.gray.light,
    borderRadius: spacing(1),
    '&.isOpened': {
      display: 'block',
    },
    zIndex: 1500,
    overflowY: 'auto',
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
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    background: `rgba(130, 141, 184, 0.3)`,
    zIndex: 1200,
  },
  blue: {
    color: palette.primary.main,
  },
}));
