import { makeStyles } from '@material-ui/core/styles';

import { SalesStatus } from 'api/types';

import { OrderItemProps } from './OrderItem.types';

export const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    filter: ({ status }: OrderItemProps) => (status === SalesStatus.Inactive ? 'grayscale(1)' : ''),

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      margin: theme.spacing(0, 2),
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    },
  },
  rowContent: {
    cursor: 'pointer',
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  image: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: theme.spacing(2.5),
    fontSize: '3em',
  },
  orderImage: {
    width: theme.spacing(9),
    height: theme.spacing(5.5),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
