import React, { ReactElement, useCallback, useState } from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  IconButton,
  Menu,
  Typography,
  MenuItem,
  Avatar,
  Emoji,
} from 'ui/atoms';
import { HistoryIcon, MenuIcon, DeleteIcon, SettingsIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Pim } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { PimPurchaseTableViewFixedHeader, PimPurchaseTableViewViewProps } from './PimPurchaseTableView.types';
import { useStyles } from './PimPurchaseTableView.styles';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

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

  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const renderCell = useCallback((pim: Pim, cell: PimPurchaseTableViewFixedHeader) => {
    switch (cell) {
      case 'address':
        return `${pim.street}`;
      case 'nr':
        return 5;
      case 'tv':
        return 'bis';
      case 'salePrice':
        return `€ ${pim.salePrice}`;
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
              onClick={() => push(joinUrlParams(AppRoute.pimDetails, { id: item.id }))}
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
                <div>
                  <IconButton
                    className="menu-icon"
                    variant="rounded"
                    size="small"
                    selected={Boolean(menuEl)}
                    onClick={onMenuClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id={item.id}
                    open={Boolean(menuEl)}
                    onClose={onMenuClose}
                    anchorEl={menuEl}
                    placement="bottom-end"
                  >
                    <SubMenuItem
                      title={formatMessage({
                        id: 'common.archive',
                      })}
                      onClick={() => {
                        onArchive?.();
                        onMenuClose();
                      }}
                    />
                    <SubMenuItem
                      title={formatMessage({
                        id: 'common.edit',
                      })}
                      onClick={() => {
                        onEdit?.();
                        onMenuClose();
                      }}
                    />
                    <SubMenuItem
                      title={formatMessage({
                        id: 'common.delete',
                      })}
                      onClick={() => {
                        onDelete?.();
                        onMenuClose();
                      }}
                      icon={<DeleteIcon color="secondary" />}
                    />
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
