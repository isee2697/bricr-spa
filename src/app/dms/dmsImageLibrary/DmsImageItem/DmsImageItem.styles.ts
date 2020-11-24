import { makeStyles } from '@material-ui/core';

import { DmsImageItem } from '../DmsImages.types';

export const useStyles = makeStyles(theme => ({
  imageWrapper: {
    position: 'relative',
    marginRight: theme.spacing(2),
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    fontSize: theme.spacing(5),
    filter: ({ status }: DmsImageItem) => (status === 'inactive' ? 'grayscale(1)' : ''),
  },
  inactiveWrapper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: theme.palette.white.light,
  },
  inactiveChip: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.gray.main,
  },
  menuWrapper: {
    position: 'absolute',
    right: -theme.spacing(2),
    top: -theme.spacing(1.5),
    borderRadius: '50%',
    background: theme.palette.white.main,
    border: `${theme.spacing(0.125)}px solid ${theme.palette.gray.light}`,
  },
  menuButton: {
    borderRadius: '50%',
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
  date: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  subtitle: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
  },
}));
