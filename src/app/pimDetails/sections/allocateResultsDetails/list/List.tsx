import React, { useState } from 'react';

import { Card, CardContent, CardHeader, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ManageIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { NCP_MATCH_ALLOCATED_PROPERTIES } from 'api/mocks/ncp-list';

import { ListActionTabs } from './actionTabs/ActionTabs';
import { useStyles } from './List.styles';
import { AllocatedProperty } from './List.types';
import { ListItem } from './listItem/ListItem';

export const AllocateResultsList = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [tabIndex, setTabIndex] = useState(0);

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'project_details.allocate_results_details.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: `project_details.allocate_results_details.allocate_result` })}
        action={
          <IconButton size="small" variant="roundedContained">
            <ManageIcon />
          </IconButton>
        }
      />
      <CardContent className={classes.content}>
        <ListActionTabs
          tabIndex={tabIndex}
          onTabChange={value => setTabIndex(value)}
          countInfo={{ allocatedProperties: 99, notAllocatedProperties: 3 }}
        />
      </CardContent>
      <List
        items={NCP_MATCH_ALLOCATED_PROPERTIES as AllocatedProperty[]}
        itemIndex={'id'}
        loadingItem={<PropertyItemPlaceholder />}
        emptyTitle={formatMessage({ id: 'project_details.allocate_results_details.allocate_result.empty_title' })}
        emptyDescription={formatMessage({
          id: 'project_details.allocate_results_details.allocate_result.empty_description',
        })}
        renderItem={(property, checked, checkbox) => (
          <ListItem key={property.id} item={property} checkbox={checkbox} checked={checked} />
        )}
        sortOptions={sortOptions}
      />
    </Card>
  );
};
