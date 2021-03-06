import React from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Avatar, Box, Typography, UserAvatar, ProgressFilling, Chip } from 'ui/atoms';
import { MailIcon, HeadIcon, PhoneIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { CrmStatus } from 'api/types';

import { CrmListItemMetaBoxProps, CrmListItemProps } from './CrmListItem.types';
import { useStyles } from './CrmListItem.style';

const CrmListItemMetaBox = ({ label, count, crm }: CrmListItemMetaBoxProps) => {
  const classes = useStyles({ status: crm.status });

  return (
    <Box className={classes.meta}>
      <Typography className={classes.metaCount} variant="h3">
        {count || '-'}
      </Typography>
      <Typography className={classes.metaLabel} variant="h6">
        {label}
      </Typography>
    </Box>
  );
};

export const CrmListItem = ({ crm, renderAction }: CrmListItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles({ status: crm.status });
  const { push } = useHistory();
  const theme = useTheme();

  const {
    firstName,
    initials,
    lastName,
    email,
    phoneNumber,
    avatar,
    property,
    partners,
    meta: { matches, interests, viewings, biddings, candidate, optant },
    completeness = 0,
  } = crm;

  const metaAsArray = [
    {
      label: 'matches',
      count: matches,
    },
    {
      label: 'interests',
      count: interests,
    },
    {
      label: 'viewings',
      count: viewings,
    },
    {
      label: 'biddings',
      count: biddings,
    },
    {
      label: 'candidate',
      count: candidate,
    },
    {
      label: 'optant',
      count: optant,
    },
  ];

  return (
    <Box
      display="flex"
      flexGrow="3"
      width="100%"
      flexDirection="column"
      className={clsx(classes.cursor, crm.status === CrmStatus.Inactive && classes.inactive)}
      onClick={() => push(AppRoute.crmRelationsDetails.replace(':id', crm.id))}
      pb={2}
    >
      <Box display="flex" mb={3}>
        <Box>
          <Avatar variant="circle" src={avatar?.url || ''} className={classes.image}>
            {!avatar && (
              <HeadIcon
                width={theme.spacing(20)}
                height={theme.spacing(20)}
                viewBox={`0 0 ${theme.spacing(20)} ${theme.spacing(20)}`}
                className={classes.crmUserAvatar}
              />
            )}
          </Avatar>
        </Box>
        <Box flexGrow={1} className={classes.content}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Box>
              <Box>
                <Typography variant="h3" className={classes.crmUserName}>
                  {firstName} {initials} {lastName}
                </Typography>
              </Box>
              <Box display="flex">
                <Box>
                  <Box mr={4}>
                    <PhoneIcon className={classes.verticalAlignTop} /> {phoneNumber}
                  </Box>
                  <Box>
                    <MailIcon className={classes.verticalAlignTop} /> {email}
                  </Box>
                </Box>
                {partners?.length && (
                  <Box mr={2}>
                    <Typography variant="h6" className={classes.label}>
                      {formatMessage({ id: 'crm.item.partner' })}
                    </Typography>
                    <Box display="flex" alignItems="center" className={classes.avatarWithName}>
                      <UserAvatar
                        name={`${partners[0].partner.firstName} ${partners[0].partner.lastName}`}
                        avatar={partners[0].partner.avatar?.url || undefined}
                        className={classes.avatarIcon}
                      />{' '}
                      {partners[0].partner.firstName} {partners[0].partner.lastName}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box>{renderAction?.(crm)}</Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h6" className={classes.label}>
                {formatMessage({ id: 'common.sidebar_category.property' })}
              </Typography>
              <Box className={classes.inlineBlock}>
                <Box display="flex" alignItems="center" mb={1} className={classes.avatarWithName}>
                  <UserAvatar name={property} avatar={avatar?.url || ''} className={classes.avatarIcon} /> {property}
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-end">
              <Chip
                variant="outlined"
                color="primary"
                label={formatMessage({ id: 'crm.item.category.seller' })}
                size="small"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box className={classes.infoProgress} mr={1}>
          <Box mb={1}>{formatMessage({ id: 'property_item.info_completed' })}</Box>
          <ProgressFilling progress={completeness} />
        </Box>
        <Box display="flex">
          {metaAsArray.map(meta => (
            <CrmListItemMetaBox
              key={meta.label}
              label={formatMessage({ id: `crm.item.meta.${meta.label}` })}
              count={meta.count}
              crm={crm}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
