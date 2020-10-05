import { makeStyles } from '@material-ui/core';

import { WorkflowItem } from '../WorkflowTemplates.types';

export const useStyles = makeStyles(theme => ({
  image: {
    width: 314,
    height: 204,
    marginRight: theme.spacing(2),
    filter: ({ status }: WorkflowItem) => (status === 'inactive' ? 'grayscale(1)' : ''),
    fontSize: '3em',
  },
  label: {
    marginBottom: theme.spacing(0.5),
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
  labels: {
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
  status: {
    color: theme.palette.orange.main,
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  statusArchived: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
  },
  stats: {
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
    marginTop: 'auto',
  },
  statItem: {
    alignItems: 'center',
    width: 75,
    height: 40,
    borderLeft: `1px solid ${theme.palette.gray.light}`,
    '&:last-of-type': {
      borderRight: `1px solid ${theme.palette.gray.light}`,
    },
  },
  statInfo: {
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  statLabel: {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    color: theme.palette.gray.main,
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
  menuText: {},
}));
