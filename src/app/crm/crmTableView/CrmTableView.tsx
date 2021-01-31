import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from 'ui/atoms';
import { SettingsIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmItem } from 'app/crm/Crm.types';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { CrmTableFixedHeader, CrmTableMovableHeader, CrmTableViewProps } from './CrmTableView.types';
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
    value: 'phoneNumber',
    hidden: true,
  },
  {
    value: 'status',
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

  const changeHeaderCells = (headerCells: HeaderColumnItemType[]) => {
    setMovableHeaderCells([...headerCells]);
    showFilterHeaderDlg(false);
  };

  const renderCell = useCallback((crm: CrmItem, cell: CrmTableFixedHeader | CrmTableMovableHeader) => {
    return crm[cell];
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" className={classes.tableHeaderCell}>
              <Checkbox
                checked={items.length === selected.length}
                onClick={e => {
                  e.stopPropagation();
                  onSelectAllItems();
                }}
              />
            </TableCell>
            {FIXED_HEADER_COLUMNS.map(cell => (
              <TableCell className={classes.tableHeaderCell} key={cell}>
                {formatMessage({ id: `crm.table.header.${cell}` })}
              </TableCell>
            ))}
            {movableHeaderCells
              .filter(cell => !cell.hidden)
              .map(cell => (
                <TableCell className={classes.tableHeaderCell} key={cell.value}>
                  {formatMessage({ id: `crm.table.header.${cell.value}` })}
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
                  checked={selected.includes(item.id)}
                  inputProps={{ 'aria-labelledby': item.id }}
                  onClick={e => {
                    e.stopPropagation();
                    onSelectItem(item.id);
                  }}
                />
              </TableCell>
              {FIXED_HEADER_COLUMNS.map(cell => (
                <TableCell className={classes.tableCellType} key={cell}>
                  {renderCell(item, cell)}
                </TableCell>
              ))}
              {movableHeaderCells
                .filter(cell => !cell.hidden)
                .map(cell => (
                  <TableCell className={classes.tableCellType} key={cell.value}>
                    {renderCell(item, cell.value)}
                  </TableCell>
                ))}
              <TableCell>
                <ListOptionsMenu id={item.id} onEditClick={() => onEdit?.()} onDeleteClick={() => onDelete?.()}>
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'common.archive',
                    })}
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
