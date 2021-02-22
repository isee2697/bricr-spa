import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import clsx from 'clsx';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Typography, Box, Pagination } from 'ui/atoms';
import { SettingsIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { BulkOperations, CrmListItem } from 'api/types';
import { ActionModalForm } from 'ui/organisms/actionModal/ActionModalForm';
import { BulkActionConfirmModal } from 'ui/organisms';
import { ListHeader } from 'ui/molecules/list/listHeader/ListHeader';
import { useSelect } from 'ui/molecules/list/useSelect/useSelect';

import {
  CrmTableFixedHeader,
  CrmTableHeaderCell,
  CrmTableMovableHeader,
  CrmTableViewProps,
} from './CrmTableView.types';
import { useStyles } from './CrmTableView.styles';
import { HeaderFilterModal } from './headerFilterModal/HeaderFilterModal';
import { HeaderColumnItemType } from './headerFilterModal/HeaderFilterModal.types';

const FIXED_HEADER_COLUMNS: CrmTableFixedHeader[] = [];
const MOVABLE_HEADER_COLUMNS: HeaderColumnItemType[] = [
  {
    value: 'firstName',
    hidden: false,
  },
  {
    value: 'lastName',
    hidden: false,
  },
  {
    value: 'email',
    hidden: true,
  },
  {
    value: 'phoneNumber',
    hidden: true,
  },
  {
    value: 'partner',
    hidden: true,
  },
  {
    value: 'manager',
    hidden: true,
  },
  {
    value: 'property',
    hidden: true,
  },
  {
    value: 'status',
    hidden: true,
  },
  {
    value: 'initials',
    hidden: true,
  },
  {
    value: 'gender',
    hidden: true,
  },
];

export const CrmTableView = ({
  items,
  onClick,
  selected,
  onSelectItem,
  onSelectAllItems,
  renderAction,
  pagination,
  sortOptions,
  onSort,
  renderDeleteTitle = () => '',
  bulkActions,
  bulkTitle,
  bulkSubmitText,
  bulkData = null,
  onBulk,
  onBulkOpen,
  onOperation,
}: CrmTableViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isActionModalOpened, setActionModalOpened] = useState(false);
  const [isModalOpened, setModalOpened] = useState(false);
  const [bulkActionProps, setBulkActionProps] = useState({
    itemName: '',
    type: BulkOperations.Delete,
    count: 0,
    onConfirm: () => Promise.resolve(),
  });

  const { checkedKeys, checkAllStatus, handleCheckAll, handleClearAll } = useSelect(items, 'id', false, selected);

  const [filterHeaderDlg, showFilterHeaderDlg] = useState(false);
  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType[]>(MOVABLE_HEADER_COLUMNS);
  const [headerCells, setHeaderCells] = useState<CrmTableHeaderCell[]>([
    ...FIXED_HEADER_COLUMNS.map(cell => ({
      field: cell,
      label: formatMessage({ id: `crm.table.header.${cell}` }),
      sortable: true,
    })),
    ...MOVABLE_HEADER_COLUMNS.filter(cell => !cell.hidden).map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `pim.table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const [sorting, setSorting] = useState(sortOptions && sortOptions.length > 0 ? sortOptions[0].key : '');

  const changeHeaderCells = (headerCells: HeaderColumnItemType[]) => {
    setMovableHeaderCells([...headerCells]);
    setHeaderCells([
      ...FIXED_HEADER_COLUMNS.map(cell => ({
        field: cell,
        label: formatMessage({ id: `pim.table.header.${cell}` }),
        sortable: true,
      })),
      ...headerCells
        .filter(cell => !cell.hidden)
        .map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `pim.table.header.${cell.value}` }),
          sortable: true,
        })),
    ]);
    showFilterHeaderDlg(false);
  };

  const renderCell = useCallback(
    (crm: CrmListItem, cell: CrmTableFixedHeader | CrmTableMovableHeader) => {
      if (cell === 'lastName') {
        return `${crm.insertion ? crm.insertion + ' ' : ''}${crm.lastName}`;
      }

      if (cell === 'partner' || cell === 'manager') {
        return 'Partner';
      }

      if (cell === 'gender') {
        return 'Male';
      }

      if (cell === 'status') {
        return formatMessage({ id: `dictionaries.crm_status.${crm.status}` });
      }

      if (cell === 'initials') {
        return '';
      }

      if (cell === 'property') {
        return '';
      }

      return crm[cell];
    },
    [formatMessage],
  );

  const handleOperation = (operation: BulkOperations) => {
    if (onOperation) {
      const filtered = items.filter(item => selected.includes(`${item.id}`));
      setBulkActionProps({
        itemName: filtered.length === 1 ? renderDeleteTitle(filtered[0]) : '',
        type: operation,
        count: filtered.length,
        onConfirm: async () => {
          await onOperation(operation, filtered);
          setModalOpened(false);
          handleClearAll();
        },
      });

      setModalOpened(true);
    }

    return undefined;
  };

  const handleBulk = () => {
    const filtered = items.filter(item => selected.includes(`${item.id}`));

    if (onBulkOpen) {
      onBulkOpen(filtered);
    }

    setActionModalOpened(true);
  };

  const handleBulkSubmit = async (values: Record<string, string | string[]>) => {
    const filtered = items.filter(item => selected.includes(`${item.id}`));

    if (onBulk) {
      await onBulk(filtered, values);
    }

    return undefined;
  };

  return (
    <>
      <ListHeader
        sortOptions={sortOptions ?? []}
        checkedKeys={checkedKeys}
        checkAllStatus={checkAllStatus}
        onCheckAll={handleCheckAll}
        onArchive={() => handleOperation(BulkOperations.Archive)}
        onDelete={() => handleOperation(BulkOperations.Delete)}
        onBulk={handleBulk}
        onSort={!!onSort ? onSort : () => {}}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" className={classes.tableHeaderCell}>
              <Checkbox
                color="primary"
                checked={items.length === selected.length}
                onClick={e => {
                  e.stopPropagation();
                  onSelectAllItems();
                }}
              />
            </TableCell>
            {headerCells.map(cell => (
              <TableCell
                key={cell.field}
                sortDirection={
                  sorting.indexOf(cell.field) !== -1 ? (sorting.indexOf('_up') !== -1 ? 'asc' : 'desc') : false
                }
                className={clsx(classes.tableHeaderCell, sorting.indexOf(cell.field) !== -1 && 'sorted')}
                onClick={() => {
                  if (cell.sortable) {
                    onSort?.(`${cell.field}_${sorting.indexOf('_up') !== -1 ? 'down' : 'up'}`);
                    setSorting(`${cell.field}_${sorting.indexOf('_up') !== -1 ? 'down' : 'up'}`);
                  }
                }}
              >
                <Typography variant="h5" component="span" className={classes.columnHeaderLabel}>
                  {cell.label}
                </Typography>
                {sorting.indexOf(cell.field) !== -1 ? (
                  <>
                    {sorting.indexOf('_down') !== -1 && (
                      <ArrowDownIcon color="primary" className={classes.columnHeaderIcon} />
                    )}
                    {sorting.indexOf('_up') !== -1 && (
                      <ArrowUpIcon color="primary" className={classes.columnHeaderIcon} />
                    )}
                  </>
                ) : (
                  <Box className={classes.columnSortIconPlaceholder} />
                )}
              </TableCell>
            ))}
            <TableCell className={classes.tableHeaderCell} valign="middle">
              <SettingsIcon className={classes.tableActionCell} onClick={() => showFilterHeaderDlg(true)} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={index}
              onClick={() => onClick?.(item.id)}
              className={classnames(classes.tableRow, index % 2 === 0 && 'striped')}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selected.includes(item.id)}
                  inputProps={{ 'aria-labelledby': item.id }}
                  onClick={e => {
                    e.stopPropagation();
                    onSelectItem(item.id);
                  }}
                />
              </TableCell>
              {headerCells.map((cell, index) => (
                <TableCell key={index}>{renderCell(item, cell.field)}</TableCell>
              ))}
              <TableCell>{renderAction?.(item)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {pagination && (
        <Box className={classes.pagination}>
          <Pagination {...pagination} />
        </Box>
      )}
      <HeaderFilterModal
        isOpened={filterHeaderDlg}
        onClose={() => showFilterHeaderDlg(false)}
        onApply={changeHeaderCells}
        columns={movableHeaderCells}
        maxColumns={5}
      />
      {isModalOpened && (
        <BulkActionConfirmModal {...bulkActionProps} isOpened={isModalOpened} onCancel={() => setModalOpened(false)} />
      )}
      {!!bulkActions && (
        <ActionModalForm
          title={bulkTitle ?? ''}
          isOpened={isActionModalOpened}
          submitText={bulkSubmitText ?? ''}
          actions={bulkActions}
          onClose={() => setActionModalOpened(false)}
          onSubmit={handleBulkSubmit}
          initialValues={bulkData}
        />
      )}
    </>
  );
};
