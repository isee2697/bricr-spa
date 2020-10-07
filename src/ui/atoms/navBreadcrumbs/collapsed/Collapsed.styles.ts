import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Tooltip } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  tooltipContent: {
    '& a': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightLight,
      display: 'inline-block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%',
      whiteSpace: 'nowrap',
    },
  },
  listItem: {
    marginBottom: theme.spacing(1.5),
  },
  button: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
    padding: 0,
    width: theme.spacing(6),
    minWidth: 'auto',
    fontSize: theme.spacing(3.5),
    height: theme.spacing(2.5),
    paddingBottom: theme.spacing(2),
    '& .MuiButton-label': {
      height: '100%',
      lineHeight: `${theme.spacing(0.21875)}px`,
    },
    '&.open': {
      color: theme.palette.primary.main,
    },
  },
}));

export const WhiteTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[0],
    borderRadius: theme.shape.borderRadius * 2,
    border: `2px solid ${theme.palette.primary.light}`,
    padding: theme.spacing(1),
    maxWidth: theme.spacing(23),
  },
  arrow: {
    '&::before': {
      borderColor: `transparent transparent ${theme.palette.common.white} transparent !important`,
    },
  },
}))(Tooltip);
