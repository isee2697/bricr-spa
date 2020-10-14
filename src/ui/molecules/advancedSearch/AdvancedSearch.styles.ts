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
    padding: spacing(1.5),
    borderRadius: spacing(1),
    '&.isOpened': {
      background: palette.white.main,
    },
    '&.disabled': {
      cursor: 'default',
      background: 'rgba(243, 245, 250, .5)',
    },
  },
  label: {
    marginBottom: spacing(0.5),
  },
  inputInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: spacing(1),
  },
  searchField: {
    border: `1px solid ${palette.primary.main}`,
    borderRadius: spacing(1),
    height: spacing(4),
    paddingLeft: spacing(0.5),
    paddingRight: spacing(0.5),
    width: '100%',
    background: palette.gray.light,
  },
  searchFieldInput: {
    '&:before': {
      content: 'none',
    },
    '&:after': {
      content: 'none',
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
  popper: {
    width: '100%',
    zIndex: 1500,
  },
  menu: {
    borderRadius: spacing(1),
    marginTop: spacing(0.5),
    background: palette.white.main,
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
    paddingLeft: spacing(2),
    paddingRight: spacing(2),

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
  itemContent: {
    height: '100%',
    borderBottom: `2px solid ${palette.gray.light}`,

    '&.selected': {
      borderBottom: 'none',
    },
    '&.last': {
      borderBottom: 'none',
    },
  },
  itemLabelWrapper: {
    height: spacing(4),
  },
  itemLabel: {
    marginLeft: spacing(1),
  },
  itemLabelPart: {
    '&.highlight': {
      color: palette.red.main,
    },
  },
  autocompleteBack: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    background: `rgba(130, 141, 184, 0.3)`,
  },
  blue: {
    color: palette.primary.main,
  },
}));
