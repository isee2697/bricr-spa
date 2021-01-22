import React from 'react';

import { useLocale } from 'hooks';
import { SortOption } from 'ui/molecules/list/List.types';
import { TableList } from 'ui/molecules/tableList/TableList';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { TableHead, TableCell } from 'ui/atoms';

import { TableViewProps } from './TableView.types';
import { useStyles } from './TableView.styles';
import { SalesLeadItem } from './item/Item';

export const TableView = ({ items }: TableViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.last_edited' }),
      key: 'lastEdited',
    },
  ];

  return (
    <TableList
      items={items}
      itemIndex={'id'}
      header={
        <TableHead>
          <TableCell padding="checkbox" />
          <TableCell className={classes.columnHeader}>{formatMessage({ id: 'sales.leads.lead.name' })}</TableCell>
          <TableCell padding="none" />
        </TableHead>
      }
      renderItem={(lead, checked, checkbox) => <SalesLeadItem checked={checked} checkbox={checkbox} item={lead} />}
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({ id: 'sales.leads.list.empty_title' })}
      emptyDescription={formatMessage({ id: 'sales.leads.empty_description' })}
      sortOptions={sortOptions}
    />
  );
};
