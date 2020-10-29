import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  root: {
    '& .content': {
      display: 'flex',
      '& > *': {
        flex: '1 0 auto',
        width: spacing(25),
      },
      '& .item:first-child .header': {
        borderTopLeftRadius: spacing(0.5),
      },
      '& .item:last-child .header': {
        borderTopRightRadius: spacing(0.5),
        borderRight: 'none',
      },
    },
    '& .header': {
      height: spacing(4),
      backgroundColor: palette.gray.light,
      color: palette.text.primary,
      fontSize: typography.h6.fontSize,
      fontWeight: typography.fontWeightBold,
      textAlign: 'center',
      borderRight: `${spacing(0.25)}px solid ${palette.white.main}`,
      paddingTop: spacing(1.25),
    },
    '& .borderRight': {
      borderRight: `${spacing(0.25)}px solid ${palette.gray.light}`,
      '& [class*="AllDayContainer-container"]': {
        marginTop: spacing(-3),
      },
    },
  },
}));
