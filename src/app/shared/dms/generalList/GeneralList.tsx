import React, { useState } from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { FormSection, UploadModalField } from 'ui/organisms';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { Alert, Box, Chip, Typography } from 'ui/atoms';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { ColumnModal, List, ListOptionsMenu, ListTableItem, PropertyItemPlaceholder } from 'ui/molecules';
import { SettingsIcon } from 'ui/atoms/icons';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';
import { Entities } from 'api/types';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';

import { DocumentItem, GeneralListProps } from './GeneralList.types';
import { DmsGeneralListFilters, DmsGeneralTableHeaderColumns } from './dictionaries';
import { useStyles } from './GeneralList.styles';

export const GeneralList = ({ activeFilters, onFilter, onAdd, count, items }: GeneralListProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [, setFileList] = useState<File[]>([]);
  const [isError, setError] = useState(false);
  const [columnModalOpen, setColumnModalOpen] = useState(false);
  const [tableSortKey, setTableSortKey] = useState<string>('from_down');
  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType<DocumentItem>[]>(
    DmsGeneralTableHeaderColumns,
  );
  const [headerCells, setHeaderCells] = useState<ListTableCell<DocumentItem>[]>([
    ...DmsGeneralTableHeaderColumns.filter(cell => !cell.hidden).map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const changeHeaderCells = (updatedHeaderCells: HeaderColumnItemType<DocumentItem>[]) => {
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

  const renderCell = (fieldName: keyof DocumentItem, item?: DocumentItem) => {
    if (fieldName === 'extension') {
      return (
        <Chip
          variant="outlined"
          size="small"
          label={formatMessage({ id: `dms.general_list_item.extension.${item?.[fieldName]}` })}
          className={classes.chip}
        />
      );
    }

    if (fieldName === 'documentType') {
      return formatMessage({ id: `dms.general_list_item.document_type.${item?.[fieldName]}` });
    }

    if (fieldName === 'isCreatedByBricr') {
      return item?.[fieldName] ? 'common.yes' : 'common.no';
    }

    if (fieldName === 'dateUpdated') {
      return (
        item?.[fieldName] && (
          <Box>
            <Typography variant="h5" className={classes.fontWeightBold}>
              {DateTime.fromISO(item?.[fieldName]).toLocaleString(DateTime.DATE_SHORT)}
            </Typography>
            <Typography variant="h6">
              {DateTime.fromISO(item?.[fieldName]).toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
            </Typography>
          </Box>
        )
      );
    }

    return item?.[fieldName] as string;
  };

  return (
    <FormSection
      title={formatMessage({ id: 'common.available_documents' })}
      onAdd={onAdd}
      buttons={<FiltersButton data={activeFilters} getActiveFilters={onFilter} filters={DmsGeneralListFilters} />}
      titleBadge={count}
      isEditable={false}
    >
      <>
        {Object.keys(activeFilters).length > 0 && (
          <Box mt={-1} mb={2}>
            <ActiveFilters activeFilters={activeFilters} onDelete={onFilter} />
          </Box>
        )}
        <UploadModalField
          onFileParse={parsedFiles => setFileList(files => [...files, ...parsedFiles])}
          onSetError={setError}
          title={
            <>
              <strong>{formatMessage({ id: 'upload_modal.add_documents' })}</strong>{' '}
              {formatMessage({ id: 'upload_modal.or_drag_and_drop' })}
            </>
          }
        />

        {!!isError && (
          <Box mt={3}>
            <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
          </Box>
        )}

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
            <EmptyStateFilter type={Entities.Event} isFiltered={Object.keys(activeFilters).length > 0} />
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
