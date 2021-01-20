import React from 'react';

import { useLocale } from 'hooks';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';

import { InvoiceItem } from './invoiceItem/InvoiceItem';
import { ListViewProps } from './ListView.types';

export const ListView = ({ items }: ListViewProps) => {
  const { formatMessage } = useLocale();

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.last_edited' }),
      key: 'lastEdited',
    },
  ];

  return (
    <List
      items={items}
      itemIndex={'id'}
      renderItem={(invoice, checked, checkbox) => <InvoiceItem checked={checked} checkbox={checkbox} item={invoice} />}
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({ id: 'sales.invoices.list.empty_title' })}
      emptyDescription={formatMessage({ id: 'sales.invoices.empty_description' })}
      sortOptions={sortOptions}
    />
  );
};
