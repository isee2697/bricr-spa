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
      height: spacing(15),
      width: spacing(15),
      backgroundColor: palette.white.main,
      borderRadius: spacing(1),
    },

    '&.purple-border': {
      border: `1px solid ${palette.purple.main}`,
    },
  },
  itemIcon: {
    background: palette.purple.light,
    width: spacing(6),
    height: spacing(6),
    borderRadius: spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing(1),

    '& svg': {
      fontSize: spacing(4),
      color: palette.purple.main,
    },
  },
  badge: {
    position: 'absolute',
    top: -spacing(2),
    right: -spacing(2),
    width: spacing(4),
    height: spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${palette.gray.light}`,
    borderRadius: spacing(10),
    backgroundColor: palette.white.main,
    cursor: 'pointer',
  },
}));
