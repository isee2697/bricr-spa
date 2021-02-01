import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { MenuItem, Box, Typography, IconButton, Menu } from 'ui/atoms';
import { MenuIcon, DeleteIcon, EditIcon } from 'ui/atoms/icons';

import { useStyles } from './PublicationRowActionButtons.styles';
import { PublicationRowActionButtonsProps } from './PublicationRowActionButtons.types';

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

export const PublicationRowActionButtons = ({ id, onDelete }: PublicationRowActionButtonsProps) => {
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
    <>
      <IconButton className="menu-icon" variant="rounded" size="small" selected={Boolean(menuEl)} onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        <SubMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onDelete?.();
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
          color="secondary"
        />
      </Menu>
    </>
  );
};
