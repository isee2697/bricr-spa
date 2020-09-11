import React, { useEffect, useState } from 'react';

import { IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { DeleteIcon, EditIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ListOptionsMenuProps } from './ListOptionsMenu.types';
import { useStyles } from './ListOptionsMenu.styles';

export const ListOptionsMenu = ({
  onEditClick,
  onDeleteClick,
  children,
  editText,
  deleteText,
  hideEditButton,
}: ListOptionsMenuProps) => {
  const { formatMessage } = useLocale();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setIsMenuOpen(Boolean(anchorEl));

    return;
  }, [anchorEl, setIsMenuOpen]);

  return (
    <>
      <IconButton onClick={e => setAnchorEl(e.currentTarget)} data-testid="open-options-menu">
        <MenuIcon />
      </IconButton>
      {anchorEl && (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={isMenuOpen}
          onClose={() => setAnchorEl(null)}
          offsetRight={12}
        >
          <div className={classes.menu} onClick={() => setAnchorEl(null)}>
            {children}
            {!hideEditButton && (
              <MenuItem
                disabled={!onEditClick}
                onClick={() => onEditClick && onEditClick()}
                data-testid="edit-option-button"
              >
                <EditIcon />
                <Typography>{editText ?? formatMessage({ id: 'common.edit' })}</Typography>
              </MenuItem>
            )}
            <MenuItem
              className="delete"
              disabled={!onDeleteClick}
              onClick={() => onDeleteClick && onDeleteClick()}
              data-testid="delete-option-button"
            >
              <DeleteIcon />
              <Typography>{deleteText ?? formatMessage({ id: 'common.delete' })}</Typography>
            </MenuItem>
          </div>
        </Menu>
      )}
    </>
  );
};
