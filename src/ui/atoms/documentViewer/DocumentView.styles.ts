import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    '& div[id$="controls"]': {
      paddingRight: spacing(2),
      '& a, & button': {
        boxShadow: 'none',
        background: 'transparent',
        '& svg path, & svg polygon': {
          fill: palette.warmgray.dark,
        },
      },
    },
  },
  header: {
    background: palette.white.main,
    '& div': {
      padding: spacing(1, 2, 1, 2),
    },
    '& .MuiTypography-root:first-child': {
      textTransform: 'lowercase',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  },
  buttonsRight: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    '& .MuiTypography-root': {
      color: palette.warmgray.dark,
      marginRight: spacing(),
    },
  },
}));
