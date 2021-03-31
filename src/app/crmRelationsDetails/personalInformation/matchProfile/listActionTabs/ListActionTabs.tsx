import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Badge, Box, Tab, Tabs, Typography } from 'ui/atoms';

import { ListActionTabsProps, MatchListActionTab } from './ListActionTabs.types';
import { useStyles } from './ListActionTabs.styles';

export const ListActionTabs = ({ onProfileIndexChange, profileIndex, profiles }: ListActionTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const tabs: MatchListActionTab[] = profiles.map(profile => ({
    value: profile.id,
    amount: 300,
    hasBadge: true,
    label: formatMessage(
      { id: 'crm.details.match_profile.profile' },
      { date: DateTime.fromISO(profile.createdAt).toLocaleString(DateTime.DATE_SHORT) },
    ),
    profile,
  }));

  return (
    <Tabs
      className={classes.root}
      value={profileIndex}
      onChange={(event, value) => onProfileIndexChange(value)}
      indicatorColor="primary"
      textColor="inherit"
      classes={{ indicator: classes.activeTabIndicator }}
    >
      {tabs.map(tab => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={
            tab.hasBadge ? (
              <Badge
                max={999}
                className={classes.badge}
                classes={{ badge: classes.badgeCount }}
                badgeContent={tab.amount}
              >
                <Box>
                  <Typography variant="h5" className={classes.fontWeightBold}>
                    {tab.label}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {tab.profile.propertyType
                      ? formatMessage({ id: `dictionaries.match_property_type.${tab.profile.propertyType}` })
                      : formatMessage({ id: 'common.unknown' })}{' '}
                    ({formatMessage({ id: `common.status.${tab.profile.isActive ? 'active' : 'inactive'}` })})
                  </Typography>
                </Box>
              </Badge>
            ) : (
              <Box>
                <Typography variant="h5">{formatMessage({ id: `crm.details.customer_journey.${tab.key}` })}</Typography>
                <Typography variant="h6" color="textSecondary">
                  {tab.profile.propertyType
                    ? formatMessage({ id: `dictionaries.match_property_type.${tab.profile.propertyType}` })
                    : formatMessage({ id: 'common.unknown' })}{' '}
                  ({formatMessage({ id: `common.status.${tab.profile.isActive ? 'active' : 'inactive'}` })})
                </Typography>
              </Box>
            )
          }
          classes={{ root: classes.tab }}
        />
      ))}
    </Tabs>
  );
};
