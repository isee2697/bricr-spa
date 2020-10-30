import React from 'react';

import { useLocale } from 'hooks';
import { Badge, Tab, Tabs } from 'ui/atoms';
import { DocumentStatus } from '../Documents.types';

import { useStyles } from './ListActionTabs.styles';
import { ListActionTabsProps } from './ListActionTabs.types';

export const ListActionTabs = ({ tabIndex, onTabChange, countInfo }: ListActionTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const tabs = Object.keys(DocumentStatus).map((tab, index) => ({
    value: index,
    amount: 0,
    label: formatMessage({ id: `dictionaries.document_status.${tab}` }),
  }));

  return (
    <Tabs
      className={classes.root}
      value={tabIndex}
      onChange={(event, value) => onTabChange(value)}
      indicatorColor="primary"
      textColor="inherit"
    >
      {tabs.map(tab => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={
            <Badge
              max={999}
              className={classes.badge}
              classes={{ badge: classes.badgeCount }}
              badgeContent={tab.amount}
            >
              {tab.label}
            </Badge>
          }
          classes={{ root: classes.tab }}
        />
      ))}
    </Tabs>
  );
};
