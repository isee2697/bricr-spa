import { makeStyles } from '@material-ui/core';

import { PropertyItemProps } from './PropertyItem.types';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
  },
  isHighlighted: {
    backgroundColor: theme.palette.yellow.light,
  },
  image: {
    width: 176,
    height: 112,
    marginRight: theme.spacing(2),
    filter: ({ isArchived }: Pick<PropertyItemProps, 'isArchived'>) => (isArchived ? 'grayscale(1)' : ''),
  },
  date: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
  },
  title: {
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  categories: {
    display: 'flex',
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1.5),
    '& span': {
      marginRight: theme.spacing(2),
    },
  },
  discountPrice: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    display: 'flex',
    marginBottom: theme.spacing(0.5),
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    color: theme.palette.gray.main,
  },
  content: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
  },
  prices: {
    display: 'flex',
    color: ({ isArchived }: Pick<PropertyItemProps, 'isArchived'>) => theme.palette[isArchived ? 'gray' : 'black'].main,
  },
  price: {
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
  },
  infoProgress: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    flexBasis: theme.spacing(22),
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    color: theme.palette.gray.main,
  },
  alert: {
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.red.main,
  },
  collapse: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
}));
