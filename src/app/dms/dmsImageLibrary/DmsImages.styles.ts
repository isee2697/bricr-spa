import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {},
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
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      margin: theme.spacing(1),
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: theme.spacing(1.5, 2, 1.5, 0),
    width: '100%',
  },
}));
