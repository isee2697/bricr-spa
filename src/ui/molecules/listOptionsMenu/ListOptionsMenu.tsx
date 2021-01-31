import React, { useState } from 'react';

import { IconButton, Menu } from 'ui/atoms';
import { DeleteIcon, EditIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ListOptionsMenuProps } from './ListOptionsMenu.types';
import { useStyles } from './ListOptionsMenu.styles';
import { ListOptionsMenuItem } from './menuItem/ListOptionsMenuItem';

export const ListOptionsMenu = ({
  id,
  onEditClick,
  onDeleteClick,
  children,
  editText,
  deleteText,
  hideEditButton,
  hideDeleteButton = false,
}: ListOptionsMenuProps) => {
  const { formatMessage } = useLocale();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  return (
    <>
      <IconButton
        className="menu-icon"
        variant="rounded"
        size="small"
        onClick={e => {
          e.stopPropagation();
          setAnchorEl(e.currentTarget);
        }}
        data-testid="open-options-menu"
        selected={Boolean(anchorEl)}
      >
        <MenuIcon />
      </IconButton>
      {anchorEl && (
        <Menu
          id={id ?? 'simple-menu'}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          placement="bottom-end"
          onClick={e => e.stopPropagation()}
        >
          <div className={classes.menu} onClick={() => setAnchorEl(null)}>
            {children}
            {!hideEditButton && (
              <ListOptionsMenuItem
                icon={<EditIcon />}
                disabled={!onEditClick}
                onClick={() => onEditClick && onEditClick()}
                data-testid="edit-option-button"
                title={editText ?? formatMessage({ id: 'common.edit' })}
              />
            )}
            {!hideDeleteButton && (
              <ListOptionsMenuItem
                className="delete"
                icon={<DeleteIcon />}
                disabled={!onDeleteClick}
                onClick={() => onDeleteClick && onDeleteClick()}
                data-testid="delete-option-button"
                title={deleteText ?? formatMessage({ id: 'common.delete' })}
              />
            )}
          </div>
        </Menu>
      )}
    </>
  );
};
