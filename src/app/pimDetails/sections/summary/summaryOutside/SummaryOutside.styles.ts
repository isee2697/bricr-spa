import makeStyles from '@material-ui/core/styles/makeStyles';

import { PimSummary } from '../Summary.types';

export const useStyles = makeStyles(theme => ({
  btnHeader: {
    '&.MuiSvgIcon-root': {
      fontSize: theme.spacing(3),
    },
  },
  summaryContainer: {
    marginTop: 0,
    marginLeft: -theme.spacing(3),
    marginRight: -theme.spacing(3),
    width: `calc(100% + ${theme.spacing(6)}px)`,
  },
  summaryContent: {
    backgroundImage: (props: PimSummary) => `${theme.palette.gradientWhite.main}, url('${props.image}')`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(2, 3),
  },
  addressIcon: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.red.light,
    padding: theme.spacing(0.5),
    width: theme.spacing(4),
    height: theme.spacing(4),
    verticalAlign: 'middle',
  },
  details: {
    marginTop: theme.spacing(29),
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
}));
