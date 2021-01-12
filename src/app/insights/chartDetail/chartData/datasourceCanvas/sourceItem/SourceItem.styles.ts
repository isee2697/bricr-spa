import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  item: {
    position: 'relative',
    width: spacing(11),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    '&.background': {
      width: spacing(11),
      height: 'fit-content',
      borderRadius: spacing(1),
    },

    '&.purple-border': {
      // border: `1px solid ${palette.purple.main}`,
    },
  },
  inactive: {
    color: palette.warmgray.main,
    '&.purple-border': {
      borderColor: palette.warmgray.main,
    },
  },
  itemIcon: {
    background: palette.purple.light,
    width: spacing(6.25),
    height: spacing(6.25),
    borderRadius: spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing(1),

    '& svg': {
      fontSize: spacing(5),
      color: palette.purple.main,
    },
  },
  inactiveIcon: {
    background: `${palette.warmgray.light}30`,

    '& svg': {
      color: palette.warmgray.main,
    },
  },
  badge: {
    position: 'absolute',
    top: -spacing(2),
    right: -spacing(0),
    border: `${spacing(0.125)}px solid ${palette.gray.light}`,
    borderRadius: spacing(10),
    backgroundColor: palette.white.main,
  },
  badgeButton: {
    width: spacing(4),
    height: spacing(4),
  },
  menuItem: {
    padding: 0,
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    marginBottom: spacing(1),
    borderBottom: `${spacing(0.25)}px solid ${palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: palette.gray.main,
  },
}));
