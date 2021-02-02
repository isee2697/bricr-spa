import React, { useCallback } from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Box, Avatar, Emoji } from 'ui/atoms';
import { SettingsIcon, ClockIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Pim } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { PimPurchaseTableViewFixedHeader, PimPurchaseTableViewViewProps } from './PimPurchaseTableView.types';
import { useStyles } from './PimPurchaseTableView.styles';

const FIXED_HEADER_COLUMNS: PimPurchaseTableViewFixedHeader[] = [
  'address',
  'nr',
  'tv',
  'postalCode',
  'city',
  'salePrice',
  'status',
];

export const PimPurchaseTableView = ({
  items,
  onClick,
  onArchive,
  onEdit,
  onDelete,
  selected,
  onSelectItem,
  onSelectAllItems,
}: PimPurchaseTableViewViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();

  const renderCell = useCallback((pim: Pim, cell: PimPurchaseTableViewFixedHeader) => {
    switch (cell) {
      case 'address':
        return `${pim.street}`;
      case 'nr':
        return 5;
      case 'tv':
        return 'bis';
      case 'salePrice':
        return `€ ${pim.salePrice || 0}`;
      default:
        return pim[cell];
    }
  }, []);

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
            {FIXED_HEADER_COLUMNS.map(cell => (
              <TableCell className={classes.tableHeaderCell} key={cell}>
                {formatMessage({ id: `pim.table.header.${cell}` })}
              </TableCell>
            ))}
            <TableCell className={classes.tableHeaderCell} valign="middle">
              <SettingsIcon className={classes.tableActionCell} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={index}
              onClick={() => push(joinUrlParams(AppRoute.pimDetails, { id: item.id }), { purchased: true })}
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
              {FIXED_HEADER_COLUMNS.map(cell => (
                <TableCell className={classes.tableCellType} key={cell}>
                  <Box display="flex" alignItems="center">
                    {cell === 'address' && item.mainPicture?.file?.url && (
                      <Avatar variant="rounded" src={item.mainPicture.file.url} className={classes.image}>
                        {!item.mainPicture.file.url && <Emoji>{'📷'}</Emoji>}
                      </Avatar>
                    )}
                    {renderCell(item, cell)}
                  </Box>
                </TableCell>
              ))}
              <TableCell>
                <ListOptionsMenu
                  id="purchase-table-menu"
                  onDeleteClick={() => {
                    onDelete?.();
                  }}
                  onEditClick={() => {
                    onEdit?.();
                  }}
                >
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'common.archive',
                    })}
                    icon={<ClockIcon />}
                    onClick={() => {
                      onArchive?.();
                    }}
                  />
                </ListOptionsMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
