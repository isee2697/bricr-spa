import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  rowFilter: {
    width: spacing(2),
    marginRight: spacing(3.5),
  },
  tableActionCell: {
    cursor: 'pointer',
  },
  row: {
    '&.list-row > span[class*="makeStyles-checkbox"]': {
      padding: spacing(1),
      marginLeft: spacing(1.3),
      marginRight: spacing(1.3),
    },
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${spacing(4)}px)`,
      margin: spacing(0, 2),
      borderBottom: `${spacing(0.25)}px solid ${palette.gray.light}`,
    },
    '&:nth-child(odd)': {
      background: palette.gray.light,
    },
  },
  rowChecked: {
    background: `${palette.primary.main}08`,
  },
  rowItem: {
    width: '100%',
    cursor: 'pointer',
  },
  actionMenu: {
    alignSelf: 'center',
    marginRight: spacing(1),
    position: 'relative',
    right: spacing(1),
    top: 0,
  },
  chip: {
    color: palette.gray.main,
  },
  fontWeightBold: {
    fontWeight: typography.fontWeightBold,
  },
}));
