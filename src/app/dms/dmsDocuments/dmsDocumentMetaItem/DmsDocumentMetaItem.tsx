import React, { useState, ReactNode } from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Typography, IconButton, Menu, MenuItem } from 'ui/atoms';
import { MenuIcon, EditIcon, DeleteIcon } from 'ui/atoms/icons';
import { ConfirmModal } from 'ui/molecules';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { DmsDashboardMetaHeader } from '../../dmsDashboard/dmsDashboardMetaHeader/DmsDashboardMetaHeader';
import { DmsAddFolderDialog } from '../dmsAddFolderDialog/DmsAddFolderDialog';

import { DmsDocumentMetaItemProps } from './DmsDocumentMetaItem.types';
import { useStyles } from './DmsDocumentMetaItem.styles';

export const DmsDocumentMetaItem = ({ name, meta, onRename, onDelete }: DmsDocumentMetaItemProps) => {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const classes = useStyles();

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const handleRenameFolder = () => {
    if (onRename) {
      setDialog(
        <DmsAddFolderDialog
          isOpened={true}
          isAdd={false}
          onClose={() => {
            setDialog(null);
          }}
          onSubmit={({ folderName }) => {
            onRename(folderName);
            setDialog(null);

            return new Promise(resolve => {});
          }}
          folderName={name}
        />,
      );
    }
  };

  const handleDeleteFolder = () => {
    if (onDelete) {
      setDialog(
        <ConfirmModal
          emoji="😬"
          isOpened={true}
          title={formatMessage({
            id: `dms.delete_folder.title`,
          })}
          onCancel={() => {
            setDialog(null);
          }}
          onConfirm={() => {
            onDelete();
            setDialog(null);
          }}
          messageLineFirst={formatMessage({
            id: `dms.delete_folder.confirm_message`,
          })}
          cancelText={formatMessage({
            id: `dms.delete_folder.cancel`,
          })}
          confirmText={formatMessage({
            id: `dms.delete_folder.confirm`,
          })}
          confirmButtonType={ConfirmButtonType.ERROR}
        />,
      );
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Typography variant="h1">{formatMessage({ id: 'dms.documents' }) + ' ' + name}</Typography>
        {(onRename || onDelete) && (
          <>
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
              id="trigger-item-menu"
              open={Boolean(menuEl)}
              onClose={onMenuClose}
              anchorEl={menuEl}
              placement="bottom-end"
            >
              {onRename && (
                <MenuItem
                  className={classes.menuItem}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    handleRenameFolder();
                    onMenuClose();
                  }}
                >
                  <EditIcon classes={{ root: classes.menuIcon }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'dms.documents.rename_folder',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
              )}
              {onDelete && (
                <MenuItem
                  className={classes.menuItem}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    handleDeleteFolder();
                    onMenuClose();
                  }}
                >
                  <DeleteIcon color="secondary" />
                  <Box ml={2}>
                    <Typography variant="subtitle1" color="secondary">
                      {formatMessage({
                        id: 'common.delete',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
              )}
            </Menu>
          </>
        )}
      </Box>
      <DmsDashboardMetaHeader meta={meta} />

      {/* Show rename / delete dialog */}
      {dialog}
    </>
  );
};
