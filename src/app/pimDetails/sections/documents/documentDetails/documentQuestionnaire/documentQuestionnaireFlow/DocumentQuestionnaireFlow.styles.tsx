import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  grayText: {
    color: theme.palette.gray.main,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
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
  yesNoRadioWrapper: {
    marginTop: theme.spacing(-1.5),
  },
  multiChoiceAnswersWrapper: {
    marginTop: theme.spacing(-1.5),
  },
}));
