import React, { ReactElement } from 'react';
import clsx from 'classnames';

import { Tabs, Tab, Badge } from 'ui/atoms';

import { ActionTabsProps } from './ActionTabs.types';
import { useStyles } from './ActionTabs.styles';

export const ActionTabs: <T>(p: ActionTabsProps<T>) => ReactElement<ActionTabsProps<T>> = ({
  className,
  status,
  onStatusChange,
  tabs,
  variant,
  classes: tabsClasses,
  badgeClasses,
}) => {
  const classes = useStyles();

  return (
    <Tabs
      className={className || 'pim-tabs'}
      value={status}
      onChange={(event, value) => onStatusChange(value)}
      indicatorColor="primary"
      textColor="primary"
      variant={variant}
      classes={tabsClasses ?? {}}
    >
      {(tabs || []).map(tab => {
        return (
          <Tab
            key={tab.value}
            value={tab.value}
            className={tab.className}
            label={
              tab.hasBadge && tab.amount && tab.amount > 0 ? (
                <Badge
                  className={classes.badge}
                  badgeContent={tab.amount}
                  color={tab?.badgeColor || 'primary'}
                  classes={{ badge: clsx(badgeClasses, tab.badgeClass) }}
                >
                  {tab.label}
                </Badge>
              ) : (
                tab.label + (tab.amount ? ` (${tab.amount})` : '')
              )
            }
          />
        );
      })}
    </Tabs>
  );
};
