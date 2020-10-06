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
    backgroundImage: (props: PimSummary) =>
      `linear-gradient(180deg, ${theme.palette.gray.light} ${theme.spacing(
        13,
      )}px, rgba(243, 245, 250, 0) ${theme.spacing(39)}px), url('${props.image}')`,
    backgroundSize: 'contain',
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
  importantBrokerBadge: {
    right: -theme.spacing(1),
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
