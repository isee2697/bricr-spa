import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    boxShadow: 'none',
    borderColor: theme.palette.gray.light,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: theme.spacing(2),
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: '100%',
    cursor: 'pointer',
    '& > *:first-child': {
      marginRight: theme.spacing(2),
    },
    '& > button': {
      marginLeft: 'auto',
    },
    '& > .MuiAvatar-root': {
      width: theme.spacing(6),
      height: theme.spacing(6),
      '& .MuiSvgIcon-root': {
        width: '1.5em',
        height: '1.5em',
      },
    },
  },
  selected: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& > button': {
      backgroundColor: theme.palette.white.main,
      borderColor: theme.palette.primary.main,
    },
  },
  adornment: {
    cursor: 'default',
    display: 'flex',
    justifyContent: 'space-between',
    flex: '0 0 100%',
    paddingTop: theme.spacing(5),
  },
  centered: {
    justifyContent: 'center',
  },
}));
