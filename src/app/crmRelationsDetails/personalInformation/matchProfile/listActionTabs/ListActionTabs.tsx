import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { Badge, Tab, Tabs } from 'ui/atoms';

import { ListActionTabsProps } from './ListActionTabs.types';
import { useStyles } from './ListActionTabs.styles';

export const ListActionTabs = ({ onProfileIndexChange, profileIndex, profiles }: ListActionTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const tabs: ActionTab[] = profiles.map(profile => ({
    value: profile.id,
    amount: 300,
    hasBadge: true,
    label: formatMessage(
      { id: 'crm.details.match_profile.profile' },
      { date: DateTime.local().toFormat('dd-MM-yyyy') },
    ),
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
                {tab.label}
              </Badge>
            ) : (
              <>{formatMessage({ id: `crm.details.customer_journey.${tab.key}` })}</>
            )
          }
          classes={{ root: classes.tab }}
        />
      ))}
    </Tabs>
  );
};
