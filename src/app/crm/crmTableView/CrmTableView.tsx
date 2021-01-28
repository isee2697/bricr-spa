import React, { ReactElement, useCallback, useState } from 'react';
import classnames from 'classnames';

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
} from 'ui/atoms';
import { HistoryIcon, MenuIcon, DeleteIcon, SettingsIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmItem } from 'app/crm/Crm.types';

import { CrmTableFixedHeader, CrmTableMovableHeader, CrmTableViewProps } from './CrmTableView.types';
import { useStyles } from './CrmTableView.styles';
import { HeaderFilterModal } from './headerFilterModal/HeaderFilterModal';
import { HeaderColumnItemType } from './headerFilterModal/HeaderFilterModal.types';

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
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

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
