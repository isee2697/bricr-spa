import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  search: {
    marginTop: spacing(4),
  },
  searchField: {
    width: '100%',
  },
  searchFieldLabel: {
    fontWeight: typography.fontWeightMedium,
  },
  searchFieldInput: {
    background: palette.gray.light,
    height: spacing(5),
    borderRadius: spacing(1),
    paddingLeft: spacing(0.5),

    '&.MuiInputBase-root': {
      marginTop: spacing(4),
    },

    '&:before': {
      content: 'none',
    },
    '&:after': {
      content: 'none',
    },
  },
  popper: {
    zIndex: 1500,
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
  itemLabel: {
    marginLeft: spacing(1),
  },
  itemLabelPart: {
    '&.highlight': {
      color: palette.red.main,
    },
  },
  linkChip: {
    cursor: 'pointer',
    height: spacing(4),
    borderRadius: spacing(1),
    background: palette.gradientBlue.light,
    overflow: 'hidden',
  },
  linkChipAvatar: {
    display: 'inline-block',
  },
  linkChipName: {
    display: 'inline-block',
    verticalAlign: 'top',
    lineHeight: `${spacing(4)}px`,
    paddingLeft: spacing(1),
    paddingRight: spacing(1),
    fontWeight: typography.fontWeightMedium,
  },
  actions: {
    marginTop: spacing(1),
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },
}));
