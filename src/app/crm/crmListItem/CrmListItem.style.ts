import { makeStyles } from '@material-ui/core';

import { CrmStatus } from 'api/types';

import { CrmListItemProps } from './CrmListItem.types';

export const useStyles = makeStyles(theme => ({
  inactive: {
    filter: 'grayscale(1)',
  },
  image: {
    width: 160,
    height: 152,
    marginRight: theme.spacing(2),
    filter: ({ crm: { status } }: CrmListItemProps) => (status === CrmStatus.Inactive ? 'grayscale(1)' : ''),
    fontSize: '3em',
  },
  cursor: {
    cursor: 'pointer',
  },
  crmUserName: {
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  inlineBlock: {
    display: 'inline-block',
  },
  label: {
    marginBottom: theme.spacing(0.5),
  },
  crmUserAvatar: {
    fontSize: theme.spacing(20),
  },
  avatarWithName: {
    background: theme.palette.gradientBlue.light,
    borderRadius: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
  avatarIcon: {
    marginRight: theme.spacing(0.5),
  },
  meta: {
    width: 74,
    height: 40,
    borderLeft: `1px solid ${theme.palette.gray.light}`,

    '&:last-child': {
      borderRight: `1px solid ${theme.palette.gray.light}`,
    },
  },
  metaCount: {
    textAlign: 'center',
  },
  metaLabel: {
    textAlign: 'center',
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
  verticalAlignTop: {
    verticalAlign: 'top',
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
}));
