import makeStyles from '@material-ui/core/styles/makeStyles';

import { ProjectDetailsSummary } from './Summary.types';

export const useStyles = makeStyles(theme => ({
  summaryContainer: {
    marginTop: 0,
    marginLeft: -theme.spacing(3),
    marginRight: -theme.spacing(3),
    width: `calc(100% + ${theme.spacing(6)}px)`,
  },
  menuIcon: {
    marginLeft: theme.spacing(3),
  },
  bubble: {
    top: theme.spacing(3),
    width: theme.spacing(24),
    height: theme.spacing(3),
    position: 'relative',
    background: theme.palette.black.main,
    color: theme.palette.white.main,
    textAlign: 'center',

    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      width: 0,
      height: 0,
      border: `${theme.spacing(3)}px solid transparent`,
      borderBottomColor: theme.palette.black.main,
      borderTop: 0,
      marginLeft: -theme.spacing(3),
      marginTop: -theme.spacing(3),
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: 0,
      border: `${theme.spacing(3)}px solid transparent`,
      borderTopColor: theme.palette.black.main,
      borderBottom: 0,
      marginLeft: -theme.spacing(3),
      marginBottom: -theme.spacing(3),
    },
  },
  summaryContent: {
    backgroundImage: (props: ProjectDetailsSummary) => `${theme.palette.gradientWhite.main}, url('${props.image}')`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(2, 3),
  },
  summaryHeaderLabel: {
    width: theme.spacing(29.5),
    padding: theme.spacing(0.75, 2.5),
    float: 'right',
    marginTop: theme.spacing(1.25),
  },
  summaryLogo: {
    width: '100%',
  },
  summaryHeader: {
    marginTop: theme.spacing(41),
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
