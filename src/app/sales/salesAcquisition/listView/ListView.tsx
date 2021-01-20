import React from 'react';

import { useLocale } from 'hooks';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';

import { ListViewProps } from './ListView.types';
import { SalesAcquisitionItem } from './item/Item';

export const ListView = ({ items, status }: ListViewProps) => {
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
      emptyTitle={formatMessage({ id: 'sales.acquisition.empty_title' })}
      emptyDescription={formatMessage({ id: 'sales.acquisition.empty_description' })}
      sortOptions={sortOptions}
      items={items}
      itemIndex={'id'}
      renderItem={(quotation, checked, checkbox) => (
        <SalesAcquisitionItem status={status} salesAcquisition={quotation} checked={checked} checkbox={checkbox} />
      )}
    />
  );
};
