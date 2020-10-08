import makeStyles from '@material-ui/core/styles/makeStyles';

import { PimSummary } from './SummaryGeneral.types';

export const useStyles = makeStyles(theme => ({
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
  summaryHeader: {
    marginTop: theme.spacing(29),
    padding: theme.spacing(2),
    background: theme.palette.white.main,
    borderRadius: theme.spacing(1),
  },
  summaryHeaderDescription: {
    marginTop: theme.spacing(3),
  },
  importantBrokerBadge: {
    right: -theme.spacing(1),
  },
  importantBrokerItem: {
    marginBottom: theme.spacing(2),

    '&:last-child': {
      marginBottom: 0,
    },
  },
  importantBrokerValue: {
    marginTop: theme.spacing(0.5),
    fontWeight: theme.typography.fontWeightMedium,
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
  gray: {
    color: theme.palette.gray.main,
  },
}));
