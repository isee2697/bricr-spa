import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import { SortDirection } from '@material-ui/core';
import clsx from 'clsx';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Typography, Box } from 'ui/atoms';
import { EditIcon, SettingsIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmItem } from 'app/crm/Crm.types';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import {
  CrmTableFixedHeader,
  CrmTableHeaderCell,
  CrmTableMovableHeader,
  CrmTableViewProps,
} from './CrmTableView.types';
import { useStyles } from './CrmTableView.styles';
import { HeaderFilterModal } from './headerFilterModal/HeaderFilterModal';
import { HeaderColumnItemType } from './headerFilterModal/HeaderFilterModal.types';

const FIXED_HEADER_COLUMNS: CrmTableFixedHeader[] = ['type', 'insertion', 'property', 'lastName'];
const MOVABLE_HEADER_COLUMNS: HeaderColumnItemType[] = [
  {
    value: 'firstName',
    hidden: false,
  },
  {
    value: 'email',
    hidden: false,
  },
  {
    value: 'status',
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
  onArchive,
  onEdit,
  onDelete,
  selected,
  onSelectItem,
  onSelectAllItems,
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

  const [sortBy, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(false);

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

  const onSort = (column: string) => {
    let direction: SortDirection = 'asc';

    if (sortBy !== column) {
      setSortColumn(column);
    } else if (sortDirection === direction) {
      direction = 'desc';
    }

    setSortDirection(direction);
  };

  const renderCell = useCallback(
    (crm: CrmItem, cell: CrmTableFixedHeader | CrmTableMovableHeader) => {
      if (cell === 'partner' || cell === 'manager') {
        return `${crm[cell].firstName} ${crm[cell].lastName}`;
      }

      if (cell === 'status') {
        return formatMessage({ id: `dictionaries.crm_status.${crm.status}` });
      }

      if (cell === 'initials') {
        return '';
      }

      return crm[cell];
    },
    [formatMessage],
  );

  return (
    <>
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
                sortDirection={sortBy === cell.field ? (sortDirection as SortDirection) : false}
                className={clsx(classes.tableHeaderCell, sortBy === cell.field && 'sorted')}
                onClick={() => (cell.sortable ? onSort(cell.field) : null)}
              >
                <Typography variant="h5" component="span" className={classes.columnHeaderLabel}>
                  {cell.label}
                </Typography>
                {sortBy === cell.field ? (
                  <>
                    {sortDirection === 'desc' && <ArrowDownIcon color="primary" className={classes.columnHeaderIcon} />}
                    {sortDirection === 'asc' && <ArrowUpIcon color="primary" className={classes.columnHeaderIcon} />}
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
              <TableCell>
                <ListOptionsMenu id={item.id} onEditClick={() => onEdit?.()} onDeleteClick={() => onDelete?.()}>
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'common.archive',
                    })}
                    icon={<EditIcon />}
                    onClick={() => onArchive?.()}
                  />
                </ListOptionsMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
