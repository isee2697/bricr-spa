import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing(-1),
    marginLeft: spacing(-3),
    '& .MuiTypography-h2': {
      marginLeft: spacing(1),
    },
    '& .MuiButton-root': {
      backgroundColor: palette.white.main,
      '&:last-child': {
        marginLeft: spacing(1),
      },
    },
  },
}));
