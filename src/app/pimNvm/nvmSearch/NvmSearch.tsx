import React from 'react';

import { useLocale } from 'hooks';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';

import { NvmSearchProps } from './NvmSearch.types';
import { NvmSearchItem } from './NvmSearchItem';

export const NvmSearch = ({ items }: NvmSearchProps) => {
  const { formatMessage } = useLocale();

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'crm.list.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <List
      itemIndex={'id'}
      items={items}
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({ id: 'nvm.list.empty_title' })}
      emptyDescription={formatMessage({ id: 'nvm.list.empty_description' })}
      renderItem={(nvm, checked, checkbox) => <NvmSearchItem checkbox={checkbox} checked={checked} item={nvm} />}
      sortOptions={sortOptions}
    />
  );
};
