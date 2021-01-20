import React from 'react';

import { useLocale } from 'hooks';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';

import { ListViewProps } from './ListView.types';
import { OrderItem } from './orderItem/OrderItem';

export const ListView = ({ items, status, onChangeSortType }: ListViewProps) => {
  const { formatMessage } = useLocale();

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.last_edited' }),
      key: 'lastEdited',
    },
  ];

  return (
    <List
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({ id: 'sales.orders.empty_title' })}
      emptyDescription={formatMessage({ id: 'sales.orders.empty_description' })}
      sortOptions={sortOptions}
      items={items}
      itemIndex={'id'}
      renderItem={(order, checked, checkbox) => (
        <OrderItem status={status} order={order} checked={checked} checkbox={checkbox} />
      )}
      onSort={key => onChangeSortType(key)}
    />
  );
};
