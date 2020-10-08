import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  content: {
    background: theme.palette.gradientBlue.main,
    borderRadius: theme.spacing(1),
  },
  groupHeader: {
    marginBottom: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
  },
  groupIndex: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: theme.spacing(3),
    border: `2px solid ${theme.palette.gray.light}`,
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
  },
  groupTitle: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  contactItem: {
    background: theme.palette.gradientBlue.main,
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),

    '&:last-child': {
      marginBottom: 0,
    },
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  marginRightThree: {
    marginRight: theme.spacing(3),
  },
}));
