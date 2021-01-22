import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  content: {
    padding: spacing(3),
  },
  header: {
    padding: 0,
  },
  btnNav: {
    background: palette.white.main,
  },
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
  appointmentCountChip: {
    padding: 0,
    marginLeft: spacing(1),
    color: palette.gray.main,
  },
  smallChip: {
    padding: 0,
    color: palette.gray.main,
  },
  collapseBtn: {
    cursor: 'pointer',
  },
}));
