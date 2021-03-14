import React, { useState } from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';
import { Entities } from 'api/types';
import { ColumnModal, List, ListOptionsMenu, ListTableItem, PropertyItemPlaceholder } from 'ui/molecules';
import { Box } from 'ui/atoms';
import { PinIcon, SettingsIcon } from 'ui/atoms/icons';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';

import { Email, EmailListProps } from './EmailList.types';
import { EmailsFilters, EmailsTableHeaderColumns } from './dictionaries';
import { useStyles } from './EmailList.styles';

export const EmailList = ({ onAdd, onFilter, activeFilters, items = [], count = 0 }: EmailListProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [columnModalOpen, setColumnModalOpen] = useState(false);
  const [tableSortKey, setTableSortKey] = useState<string>('from_down');
  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType<Email>[]>(EmailsTableHeaderColumns);
  const [headerCells, setHeaderCells] = useState<ListTableCell<Email>[]>([
    ...EmailsTableHeaderColumns.filter(cell => !cell.hidden).map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const changeHeaderCells = (updatedHeaderCells: HeaderColumnItemType<Email>[]) => {
    setMovableHeaderCells([...updatedHeaderCells]);
    setHeaderCells([
      ...updatedHeaderCells
        .filter(cell => !cell.hidden)
        .map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `table.header.${cell.value}` }),
          sortable: true,
        })),
    ]);
  };

  const renderCell = (fieldName: keyof Email, item?: Email) => {
    if (fieldName === 'from') {
      return item?.from[0].name;
    }

    if (fieldName === 'date') {
      return item?.date && DateTime.fromISO(item?.date).toLocaleString(DateTime.DATE_SHORT);
    }

    if (fieldName === 'pinned') {
      return <PinIcon color={item?.pinned ? 'error' : 'action'} />;
    }

    return item?.[fieldName] as string;
  };

  return (
    <FormSection
      title={formatMessage({ id: 'common.emails' })}
      onAdd={onAdd}
      buttons={<FiltersButton data={activeFilters} getActiveFilters={onFilter} filters={EmailsFilters} />}
      titleBadge={count}
      isEditable={false}
    >
      <>
        <List
          listIndexHeader={
            <>
              <Box flexGrow={1}>
                <ListTableItem
                  isHeader
                  onSort={(key: string) => {
                    setTableSortKey(key);
                  }}
                  sortKey={tableSortKey?.split('_')[0]}
                  sortDirection={tableSortKey?.split('_')[1] === 'down' ? 'down' : 'up'}
                  headerCells={headerCells}
                />
              </Box>
              <Box className={classes.rowFilter}>
                <SettingsIcon className={classes.tableActionCell} onClick={() => setColumnModalOpen(true)} />
              </Box>
            </>
          }
          items={items}
          itemIndex="id"
          sortOptions={[]}
          onSort={key => {}}
          pagination={{}}
          loadingItem={<PropertyItemPlaceholder />}
          renderItem={(item, checked, checkbox) => (
            <Box
              key={item.id}
              display="flex"
              className={clsx(classes.row, { [classes.rowChecked]: checked }, 'list-row')}
            >
              {checkbox}
              <Box flexGrow={1} className={classes.rowItem}>
                <ListTableItem renderCell={renderCell} headerCells={headerCells} item={item} />
              </Box>
              <Box className={classes.actionMenu}>
                <ListOptionsMenu></ListOptionsMenu>
              </Box>
            </Box>
          )}
          emptyPlaceholder={
            <EmptyStateFilter type={Entities.Email} isFiltered={Object.keys(activeFilters).length > 0} />
          }
        />
        <ColumnModal
          columns={movableHeaderCells ?? []}
          onApply={columns => {
            setColumnModalOpen(false);
            changeHeaderCells(columns);
          }}
          isOpened={columnModalOpen}
          onClose={() => setColumnModalOpen(false)}
        />
      </>
    </FormSection>
  );
};
