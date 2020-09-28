import { makeStyles } from '@material-ui/core';

import { CrmListItemProps } from './CrmListItem.types';

export const useStyles = makeStyles(theme => ({
  image: {
    width: 160,
    height: 152,
    marginRight: theme.spacing(2),
    filter: ({ crm: { status } }: CrmListItemProps) => (status === 'archived' ? 'grayscale(1)' : ''),
    fontSize: '3em',
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
  avatarWithName: {
    background: 'linear-gradient(315deg, rgba(10, 87, 233, 0.1) 0%, rgba(159, 192, 255, 0.1) 100%)',
    borderRadius: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
  avatarIcon: {
    marginRight: theme.spacing(0.5),
  },
  meta: {
    width: 74,
    height: 40,
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
}));
