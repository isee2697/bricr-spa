import React from 'react';

import { useLocale } from 'hooks';
import { SortOption } from 'ui/molecules/list/List.types';
import { TableList } from 'ui/molecules/tableList/TableList';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { TableHead, TableCell } from 'ui/atoms';

import { TableViewProps } from './TableView.types';
import { useStyles } from './TableView.styles';
import { SalesAcquisitionItem } from './item/Item';

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
            {formatMessage({ id: 'sales.acquisitions.acquisition.name' })}
          </TableCell>
          <TableCell padding="none" />
        </TableHead>
      }
      renderItem={(acquisition, checked, checkbox) => (
        <SalesAcquisitionItem checked={checked} checkbox={checkbox} item={acquisition} />
      )}
      loadingItem={<PropertyItemPlaceholder />}
      emptyTitle={formatMessage({ id: 'sales.acquisitions.list.empty_title' })}
      emptyDescription={formatMessage({ id: 'sales.acquisitions.empty_description' })}
      sortOptions={sortOptions}
    />
  );
};
