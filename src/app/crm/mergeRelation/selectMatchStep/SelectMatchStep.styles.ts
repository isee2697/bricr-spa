import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardsWrapper: {
    overflowX: 'auto',
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    height: theme.spacing(5.25),
  },
  sourceCard: {
    '& .MuiCardHeader-content': {
      whiteSpace: 'nowrap',
    },
  },
  selectedCard: {
    '& .MuiCardHeader-content': {
      whiteSpace: 'nowrap',
    },
    boxShadow: 'none',
    border: 'none',
    background: 'none',
  },
  gridItem: {
    lineBreak: 'anywhere',
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.gray.main}`,
    },
  },
  borderBottom: {
    borderBottom: `1px solid ${theme.palette.gray.main}`,
    height: theme.spacing(8),
  },
}));
