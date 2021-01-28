import React, { useState } from 'react';

import { Box, IconButton, Menu, Typography, MenuItem } from 'ui/atoms';
import { HistoryIcon, MenuIcon, DeleteIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './ActionButtons.styles';
import { SubMenuItemType, TableCellMenuProps } from './ActionButtons.types';

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

export const ActionButtons = ({ id, onEdit, onDelete }: TableCellMenuProps) => {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <div>
      <IconButton className="menu-icon" variant="rounded" size="small" selected={Boolean(menuEl)} onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        <SubMenuItem
          title={formatMessage({
            id: 'crm.details.documents.menu.edit',
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
  );
};
