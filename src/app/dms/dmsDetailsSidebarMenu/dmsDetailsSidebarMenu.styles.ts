import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  icon: {
    width: spacing(6),
    height: spacing(6) - 2,
    borderRadius: spacing(1),
    background: palette.gray.light,

    '& svg': {
      fontSize: spacing(4),
      color: palette.black.main,
    },
  },
  collapseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: spacing(1.875),
    cursor: 'pointer',
    borderBottom: `${spacing(0.25)}px solid ${palette.gray.light}`,
    paddingBottom: spacing(1),
  },
  collapseContent: {
    paddingTop: spacing(1),
    '& .MuiCollapse-wrapperInner': {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  token: {
    height: spacing(9),
  },
  image: {
    width: spacing(10),
    height: spacing(10),
  },
  input: {
    padding: 0,
    height: spacing(6),
    background: palette.gray.light,
  },
  inputInner: {
    height: spacing(6),
  },
  itemLabelWrapper: {
    paddingLeft: spacing(1),
    paddingRight: spacing(1),
  },
  searchField: {
    paddingRight: spacing(1),
    paddingLeft: spacing(1),
    height: spacing(6),
    padding: 0,
  },
  attachIcon: {
    transform: 'rotate(45deg)',
  },
  attachment: {
    border: `1px solid ${palette.gray.main}`,
    borderRadius: spacing(1),
    padding: spacing(1),
  },
}));
