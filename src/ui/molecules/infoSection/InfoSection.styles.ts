import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  box: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    '&.gradient': {
      background: theme.palette.gradientBlue.light,
      borderRadius: theme.spacing(1),
      borderColor: theme.palette.gray.light,
      borderStyle: 'solid',
      borderWidth: theme.spacing(0.125),
    },

    '&.noPadding': {
      padding: 0,
    },
  },
  emoji: {
    fontSize: 64,
  },
}));
