import React from 'react';

import { useLocale } from 'hooks';
import { SortOption } from 'ui/molecules/list/List.types';
import { TableList } from 'ui/molecules/tableList/TableList';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { TableHead, TableCell } from 'ui/atoms';

import { TableViewProps } from './TableView.types';
import { QuotationItem } from './quotationItem/QuotationItem';
import { useStyles } from './TableView.styles';

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
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.quotations.quotation.id' })}
          </TableCell>
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.quotations.quotation.version' })}
          </TableCell>
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.quotations.quotation.address' })}
          </TableCell>
          <TableCell padding="none" />
        </TableHead>
      }
      renderItem={(quotation, checked, checkbox) => (
        <QuotationItem checked={checked} checkbox={checkbox} item={quotation} />
      )}
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({ id: 'sales.quotations.list.empty_title' })}
      emptyDescription={formatMessage({ id: 'sales.quotations.empty_description' })}
      sortOptions={sortOptions}
    />
  );
};
