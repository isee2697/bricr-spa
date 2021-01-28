import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, spacing, palette }) => ({
  tabs: {
    margin: spacing(0, -2),
    '& .MuiTab-root': {
      minWidth: 90,
    },
  },
  scrollable: {
    right: spacing(-1),
  },
  group: {
    paddingRight: spacing(2),
  },
  moreButton: {
    justifyContent: 'left',
  },
  buttons: {
    width: `calc(50% - ${spacing(0.5)}px)`,
    padding: spacing(1.5, 1),
    fontWeight: typography.fontWeightRegular,
    '&.last': {
      marginLeft: spacing(1),
    },
    '&.Mui-disabled': {
      borderColor: palette.blue.dark,
      color: palette.text.primary,
      fontWeight: typography.fontWeightBold,
      backgroundColor: palette.gray.light,
    },
  },
  boldText: {
    fontWeight: typography.fontWeightMedium,
  },
  iconBox: {
    fontSize: typography.h5.fontSize,
    '& .MuiSvgIcon-root': {
      fontSize: spacing(2),
      marginRight: spacing(),
    },
  },
  select: {
    borderRadius: spacing(1),
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
}));
