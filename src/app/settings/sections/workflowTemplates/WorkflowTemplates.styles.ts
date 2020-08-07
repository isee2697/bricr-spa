import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  info: {
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
  },
  blueprintCheckboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  blueprintCheckbox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: theme.spacing(14.5),
    flexWrap: 'wrap',

    '& .MuiFormControlLabel-label': {
      paddingLeft: theme.spacing(1.125),
      ...theme.typography.h5,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));
