import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  metaWrapper: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(2),
      flex: '1 0 auto',
    },
  },
  meta: {
    display: 'inline-block',
    background: theme.palette.white.main,
    borderRadius: theme.spacing(1),
    minWidth: `calc(25% - ${theme.spacing(1.5)}px)`,
    overflow: 'hidden',
  },
  metaContent: {
    paddingTop: theme.spacing(2),
    '&:last-child': {
      paddingBottom: theme.spacing(1),
    },
  },
  metaLabel: {
    color: theme.palette.gray.main,
  },
  metaCount: {
    fontWeight: theme.typography.fontWeightMedium,
    '&.success': {
      color: theme.palette.green.main,
    },
    '&.warning': {
      color: theme.palette.orange.main,
    },
    '&.error': {
      color: theme.palette.error.main,
    },
  },
  metaStatusIcon: {
    '&.success': {
      color: theme.palette.green.main,
    },
    '&.warning': {
      color: theme.palette.orange.main,
    },
    '&.error': {
      color: theme.palette.error.main,
    },
  },
  metaDays: {
    color: theme.palette.gray.main,
  },
}));
