import React from 'react';

import { Card, CardContent, CardHeader, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ManageIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { PIM_MATCH_ALLOCATED_PROPERTIES } from 'api/mocks/pim';

import { useStyles } from './List.styles';
import { AllocatedProperty } from './List.types';
import { ListItem } from './listItem/ListItem';

export const AllocateResultsList = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'pim_details.allocate_results_details.sort_option.gold_relations' }),
      key: 'gold_relations',
    },
  ];

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: `pim_details.allocate_results_details.allocate_result` })}
        action={
          <IconButton size="small" variant="roundedContained">
            <ManageIcon />
          </IconButton>
        }
      />
      <CardContent className={classes.content}>
        <List
          items={PIM_MATCH_ALLOCATED_PROPERTIES as AllocatedProperty[]}
          itemIndex={'id'}
          loadingItem={<PropertyItemPlaceholder />}
          emptyTitle={formatMessage({ id: 'pim_details.allocate_results_details.allocate_result.empty_title' })}
          emptyDescription={formatMessage({
            id: 'pim_details.allocate_results_details.allocate_result.empty_description',
          })}
          renderItem={(property, checked, checkbox) => (
            <ListItem key={property.id} item={property} checkbox={checkbox} checked={checked} />
          )}
          sortOptions={sortOptions}
        />
      </CardContent>
    </Card>
  );
};
