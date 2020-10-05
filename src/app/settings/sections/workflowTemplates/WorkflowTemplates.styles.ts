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
  content: {
    padding: theme.spacing(3),
  },
  itemButton: {
    cursor: 'pointer',
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
      margin: theme.spacing(0, 2),
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: `22px 16px 22px 0`,
    width: '100%',
  },
}));
