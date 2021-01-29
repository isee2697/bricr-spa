import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Box, Avatar, Emoji } from 'ui/atoms';
import { SettingsIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Pim } from 'api/types';

import {
  PimTableFixedHeader,
  PimTableHeaderCell,
  PimTableMovableHeader,
  PimTableViewProps,
} from './PimTableView.types';
import { useStyles } from './PimTableView.styles';
import { HeaderFilterModal } from './headerFilterModal/HeaderFilterModal';
import { HeaderColumnItemType } from './headerFilterModal/HeaderFilterModal.types';
import { ActionButtons } from './actionButtons/ActionButtons';

const FIXED_HEADER_COLUMNS: PimTableFixedHeader[] = ['address', 'houseNumber', 'addition', 'city'];
const MOVABLE_HEADER_COLUMNS: HeaderColumnItemType[] = [
  {
    value: 'propertyType',
    hidden: false,
  },
  {
    value: 'status',
    hidden: false,
  },
  {
    value: 'salePrice',
    hidden: true,
  },
  {
    value: 'rentPrice',
    hidden: true,
  },
  {
    value: 'attentionNote',
    hidden: true,
  },
  {
    value: 'completeness',
    hidden: true,
  },
];

export const PimTableView = ({
  items,
  onClick,
  onArchive,
  onEdit,
  onDelete,
  selected,
  onSelectItem,
  onSelectAllItems,
}: PimTableViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [filterHeaderDlg, showFilterHeaderDlg] = useState(false);
  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType[]>(MOVABLE_HEADER_COLUMNS);
  const [headerCells, setHeaderCells] = useState<PimTableHeaderCell[]>(
    FIXED_HEADER_COLUMNS.map(cell => ({
      field: cell,
      label: formatMessage({ id: `pim.table.header.${cell}` }),
      sorter: () => {
        onSort(cell);
      },
    })),
  );

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'ascending' | 'descending' | null>(null);

  const changeHeaderCells = (headerCells: HeaderColumnItemType[]) => {
    setMovableHeaderCells([...headerCells]);
    setHeaderCells([
      ...FIXED_HEADER_COLUMNS.map(cell => ({
        field: cell,
        label: formatMessage({ id: `pim.table.header.${cell}` }),
        sorter: () => {
          onSort(cell);
        },
      })),
      ...headerCells
        .filter(cell => !cell.hidden)
        .map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `pim.table.header.${cell.value}` }),
          sorter: () => onSort(cell.value),
        })),
    ]);
    showFilterHeaderDlg(false);
  };

  const renderCell = useCallback((pim: Pim, cell: PimTableFixedHeader | PimTableMovableHeader) => {
    switch (cell) {
      case 'address':
        return `${pim.street}, ${pim.city}`;
      case 'addition':
        return pim.houseNumberAddition;
      default:
        return pim[cell];
    }
  }, []);

  const onSort = (column: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';

    if (sortColumn !== column) {
      setSortColumn(column);
    } else if (sortDirection === direction) {
      direction = 'descending';
    }

    setSortDirection(direction);
  };

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
                className={classnames(classes.tableHeaderCell, sortColumn === cell.field && 'sorting')}
                onClick={() => cell.sorter?.()}
              >
                <Box display="flex" alignItems="center">
                  <div>{cell.label}</div>
                  <Box ml={0.5} display="flex" alignItems="center">
                    {sortColumn === cell.field ? (
                      sortDirection === 'ascending' ? (
                        <ArrowUpIcon fontSize="small" color="primary" />
                      ) : (
                        <ArrowDownIcon fontSize="small" color="primary" />
                      )
                    ) : null}
                  </Box>
                </Box>
              </TableCell>
            ))}
            <TableCell className={classes.tableHeaderCell} valign="middle">
              <SettingsIcon className={classes.tableActionCell} onClick={() => showFilterHeaderDlg(true)} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...items, ...items].map((item, index) => (
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
                <TableCell key={index}>
                  {cell.field === 'address' && item.mainPicture?.file?.url && (
                    <Avatar variant="rounded" src={item.mainPicture.file.url} className={classes.image}>
                      {!item.mainPicture.file.url && <Emoji>{'📷'}</Emoji>}
                    </Avatar>
                  )}
                  {renderCell(item, cell.field)}
                </TableCell>
              ))}
              <TableCell>
                <ActionButtons id={item.id} onArchive={onArchive} onEdit={onEdit} onDelete={onDelete} />
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
