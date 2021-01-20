import React from 'react';

import { useLocale } from 'hooks';
import { SortOption } from 'ui/molecules/list/List.types';
import { TableList } from 'ui/molecules/tableList/TableList';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { TableHead, TableCell } from 'ui/atoms';

import { TableViewProps } from './TableView.types';
import { InvoiceItem } from './invoiceItem/InvoiceItem';
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
            {formatMessage({ id: 'sales.invoices.invoice.invoice_number' })}
          </TableCell>
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.invoices.invoice.invoice_date' })}
          </TableCell>
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.invoices.invoice.invoice_due_date' })}
          </TableCell>
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.invoices.invoice.invoice_type' })}
          </TableCell>
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.invoices.invoice.amount' })}
          </TableCell>
          <TableCell className={classes.columnHeader}>{formatMessage({ id: 'sales.invoices.invoice.tax' })}</TableCell>
          <TableCell className={classes.columnHeader}>
            {formatMessage({ id: 'sales.invoices.invoice.total_incl_tax' })}
          </TableCell>
          <TableCell padding="none" />
        </TableHead>
      }
      renderItem={(invoice, checked, checkbox) => <InvoiceItem checked={checked} checkbox={checkbox} item={invoice} />}
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({ id: 'sales.invoices.list.empty_title' })}
      emptyDescription={formatMessage({ id: 'sales.invoices.empty_description' })}
      sortOptions={sortOptions}
    />
  );
};
