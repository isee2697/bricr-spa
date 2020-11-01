import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    flex: '1 1 auto',
  },
  cardContent: {
    paddingTop: theme.spacing(4),
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
  businesses: {
    marginBottom: theme.spacing(4),
  },
  content: {
    background: theme.palette.gradientBlue.main,
    borderRadius: theme.spacing(1),
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(17.5),
    borderRadius: 0,
    borderTopLeftRadius: theme.spacing(1),
    borderBottomLeftRadius: theme.spacing(1),
  },
  businessItemData: {
    padding: theme.spacing(2),
    background: theme.palette.gradientBlue.light,
    borderTopRightRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
  },
  businessItemDataHeader: {
    borderBottom: `2px solid ${theme.palette.white.main}`,
    paddingBottom: theme.spacing(1),
  },
  businessItemDataBody: {
    color: theme.palette.gray.main,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
