import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  chip: {
    borderRadius: ({ avatarVariant }: { avatarVariant: 'circle' | 'rounded' | 'square' }) =>
      avatarVariant === 'circle' ? theme.spacing(1.5, 0.5, 0.5, 1.5) : theme.spacing(0.5),
    padding: 0,
    height: theme.spacing(3),
    overflow: 'hidden',
    background: theme.palette.gradientBlue.light,
    borderColor: theme.palette.blue.light,
    '& .MuiChip-avatar': {
      marginLeft: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.gray.main,
    marginBottom: theme.spacing(0.25),
  },
  chipLabel: {
    color: theme.palette.text.primary,
  },
}));
