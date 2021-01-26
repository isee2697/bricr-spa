import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '& form': {
      width: '100%',
    },
    minWidth: '100%',
    '& .MuiPaper-root.MuiCard-root': {
      padding: theme.spacing(1, 2),
      '&:not(:last-child)': {
        marginBottom: theme.spacing(3),
      },
    },
  },
  statusIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: theme.spacing(1),
    color: theme.palette.gray.main,

    '&.selected': {
      color: theme.palette.white.main,
      background: theme.palette.gray.main,
    },
  },
  btnBack: {
    transform: 'rotate(90deg)',
  },
  btnWhite: {
    background: theme.palette.white.main,
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
}));
