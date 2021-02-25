import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import clsx from 'clsx';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Typography, Box, Pagination } from 'ui/atoms';
import { SettingsIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmItem } from 'app/crm/Crm.types';

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
}: CrmTableViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

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
    (crm: CrmItem, cell: CrmTableFixedHeader | CrmTableMovableHeader) => {
      if (cell === 'partner' || cell === 'manager') {
        return `${crm[cell]?.firstName} ${crm[cell]?.lastName}`;
      }

      if (cell === 'status') {
        return formatMessage({ id: `dictionaries.crm_status.${crm.status}` });
      }

      return crm[cell];
    },
    [formatMessage],
  );

  return (
    <>
      <Box width="100%" className={classes.scrollable}>
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
      </Box>
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
    </>
  );
};
