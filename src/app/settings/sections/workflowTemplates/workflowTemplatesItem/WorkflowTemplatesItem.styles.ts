import { makeStyles } from '@material-ui/core';

import { WorkflowTemplate, WorkflowTemplateStatus } from 'api/types';

export const useStyles = makeStyles(theme => ({
  image: {
    width: theme.spacing(39.25),
    height: theme.spacing(25.5),
    marginRight: theme.spacing(2),
    filter: ({ status }: WorkflowTemplate) => (status === WorkflowTemplateStatus.Active ? 'grayscale(1)' : ''),
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
    width: theme.spacing(9.375),
    height: theme.spacing(5),
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
}));
