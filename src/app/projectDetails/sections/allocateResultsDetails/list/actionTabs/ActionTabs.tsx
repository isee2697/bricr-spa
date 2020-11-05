import React from 'react';

import { useLocale } from 'hooks';
import { Tab, Tabs } from 'ui/atoms';

import { ActionTabsProps } from './ActionTabs.types';
import { useStyles } from './ActionTabs.styles';

export const ListActionTabs = ({ tabIndex, onTabChange, countInfo }: ActionTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Tabs
      className={classes.root}
      value={tabIndex}
      onChange={(event, value) => onTabChange(value)}
      indicatorColor="primary"
      textColor="inherit"
    >
      <Tab
        value={0}
        label={`${formatMessage({ id: 'project_details.allocate_results_details.allocated_properties' })} (${
          countInfo.allocatedProperties
        })`}
        classes={{ root: classes.tab }}
      />
      <Tab
        value={1}
        label={`${formatMessage({ id: 'project_details.allocate_results_details.not_allocated_properties' })} (${
          countInfo.notAllocatedProperties
        })`}
        classes={{ root: classes.tab }}
      />
    </Tabs>
  );
};
