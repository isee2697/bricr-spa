import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  item: {
    width: '100% ',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

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
}));
