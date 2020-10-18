import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  item: {
    width: '100% ',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: `0px 3px 6px ${palette.gray.main}30`,

    '&.background': {
      height: spacing(8),
      width: spacing(25),
      paddingLeft: spacing(1),
      backgroundColor: palette.white.main,
      borderRadius: spacing(1),
    },

    '&.dropped': {
      height: spacing(6),
      width: spacing(27),
      backgroundColor: palette.white.main,
      borderRadius: spacing(1),
      border: `1px solid ${palette.blue.main}`,
    },
  },
  inactive: {
    color: palette.warmgray.light,
    '&.dropped': {
      borderColor: palette.warmgray.light,
    },
  },
  itemIcon: {
    background: palette.blue.light,
    width: spacing(6),
    height: spacing(6) - 2,
    borderRadius: spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing(2),

    '&.dropped': {},

    '& svg': {
      fontSize: spacing(4),
      color: palette.blue.main,
    },
  },
  inactiveIcon: {
    background: palette.warmgray.light,

    '& svg': {
      color: palette.white.main,
    },
  },
  badge: {
    border: `1px solid ${palette.gray.light}`,
    borderRadius: spacing(10),
    backgroundColor: palette.white.main,
  },
  badgeButton: {
    width: spacing(5),
    height: spacing(5),
  },
  menuItem: {
    padding: 0,
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    marginBottom: spacing(1),
    borderBottom: `2px solid ${palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: palette.gray.main,
  },
}));
