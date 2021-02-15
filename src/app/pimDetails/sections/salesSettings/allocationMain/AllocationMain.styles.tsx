import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  tabItem: {
    padding: theme.spacing(2, 4),
    textAlign: 'left',
  },
  tabs: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  criteriaTypeForm: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
}));
