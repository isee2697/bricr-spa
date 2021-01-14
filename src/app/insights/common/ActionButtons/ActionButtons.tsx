import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { MenuItem, Box, Typography, IconButton, Menu } from 'ui/atoms';
import { MenuIcon, DeleteIcon, EditIcon } from 'ui/atoms/icons';

import { useStyles } from './ActionButtons.styles';
import { ActionButtonsProps } from './ActionButtons.types';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
};

const SubMenuItem = ({ title, onClick, icon, color }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <EditIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1" color={color}>
          {title}
        </Typography>
      </Box>
    </MenuItem>
  );
};

export const ActionButtons = ({ id, onEditDetails }: ActionButtonsProps) => {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const handleClone = () => {};

  const handleCopyUrl = () => {};

  const handleEmailDashboard = () => {};

  const handleEditDetails = () => {
    onEditDetails?.();
  };

  const handleInactive = () => {};

  const handleDelete = () => {};

  return (
    <>
      <IconButton className="menu-icon" variant="rounded" size="small" selected={Boolean(menuEl)} onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        <SubMenuItem
          title={formatMessage({
            id: 'insights.menu.clone',
          })}
          onClick={() => {
            handleClone?.();
            onMenuClose();
          }}
        />
        <SubMenuItem
          title={formatMessage({
            id: 'insights.menu.copy_url',
          })}
          onClick={() => {
            handleCopyUrl?.();
            onMenuClose();
          }}
        />
        <SubMenuItem
          title={formatMessage({
            id: 'insights.menu.email_dashboard',
          })}
          onClick={() => {
            handleEmailDashboard?.();
            onMenuClose();
          }}
        />
        <SubMenuItem
          title={formatMessage({
            id: 'insights.menu.edit_details',
          })}
          onClick={() => {
            handleEditDetails?.();
            onMenuClose();
          }}
        />
        <SubMenuItem
          title={formatMessage({
            id: 'insights.menu.inactive',
          })}
          onClick={() => {
            handleInactive?.();
            onMenuClose();
          }}
        />
        <SubMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            handleDelete?.();
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
          color="secondary"
        />
      </Menu>
    </>
  );
};
