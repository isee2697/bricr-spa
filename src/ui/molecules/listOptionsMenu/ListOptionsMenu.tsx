import React, { useState } from 'react';

import { Box, IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { DeleteIcon, EditIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ListOptionsMenuProps } from './ListOptionsMenu.types';
import { useStyles } from './ListOptionsMenu.styles';

export const ListOptionsMenu = ({ onEditClick, onDeleteClick, children }: ListOptionsMenuProps) => {
  const { formatMessage } = useLocale();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="flex-end" padding={0.5}>
        <IconButton onClick={e => setAnchorEl(e.currentTarget)} data-testid="edit-picture-button">
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        offsetRight={12}
      >
        <div className={classes.menu} onClick={() => setAnchorEl(null)}>
          {children}
          <MenuItem disabled={!onEditClick} onClick={() => onEditClick && onEditClick()}>
            <EditIcon />
            <Typography>{formatMessage({ id: 'common.edit' })}</Typography>
          </MenuItem>
          <MenuItem className="delete" disabled={!onDeleteClick} onClick={() => onDeleteClick && onDeleteClick()}>
            <DeleteIcon />
            <Typography>{formatMessage({ id: 'common.delete' })}</Typography>
          </MenuItem>
        </div>
      </Menu>
    </>
  );
};
