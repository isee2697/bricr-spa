import React, { useState, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Avatar, Box, Typography, Emoji, IconButton, Chip, Menu, MenuItem, Checkbox } from 'ui/atoms';
import { MenuIcon, EditIcon, DeleteIcon } from 'ui/atoms/icons';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { ConfirmModal } from 'ui/molecules';
import { DmsEditImageDialog } from '../dmsEditImageDialog/DmsEditImageDialog';

import { DmsImageItemProps } from './DmsImageItem.types';
import { useStyles } from './DmsImageItem.styles';

export const DmsImageItem = ({ image, onDelete, onEdit }: DmsImageItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(image);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const [dialog, setDialog] = useState<null | ReactNode>(null);

  const { id, name, createdAt, url, size, type, tags, status } = image;

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const handleEditTag = () => {
    setDialog(
      <DmsEditImageDialog
        image={image}
        onClose={() => setDialog(null)}
        isOpened={true}
        onSubmit={({ tags }) => onEdit({ ...image, tags })}
      />,
    );
  };

  const handleDeleteImage = () => {
    if (onDelete) {
      setDialog(
        <ConfirmModal
          emoji="😬"
          isOpened={true}
          title={formatMessage({
            id: `dms.delete_image.title`,
          })}
          onCancel={() => {
            setDialog(null);
          }}
          onConfirm={() => {
            onDelete();
            setDialog(null);
          }}
          messageLineFirst={formatMessage({
            id: `dms.delete_image.confirm_message`,
          })}
          cancelText={formatMessage({
            id: `dms.delete_image.cancel`,
          })}
          confirmText={formatMessage({
            id: `dms.delete_image.confirm`,
          })}
          confirmButtonType={ConfirmButtonType.ERROR}
        />,
      );
    }
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex">
        <Box position="relative" className={classes.imageWrapper}>
          <Avatar variant="rounded" src={url} className={classes.image}>
            {!url && <Emoji>{'📷'}</Emoji>}
          </Avatar>
          {status === 'inactive' && (
            <Box className={classes.inactiveWrapper}>
              <Chip
                color="secondary"
                label={formatMessage({
                  id: 'dms.images.inactive',
                })}
                className={classes.inactiveChip}
                size="small"
              />
            </Box>
          )}
          <div>
            <div className={classes.menuWrapper}>
              <IconButton
                className={classes.menuButton}
                variant="rounded"
                size="small"
                selected={Boolean(menuEl)}
                onClick={onMenuClick}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
              <MenuItem
                className={classes.menuItem}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation();
                  handleEditTag();
                  onMenuClose();
                }}
              >
                <EditIcon classes={{ root: classes.menuIcon }} />
                <Box ml={2}>
                  <Typography variant="subtitle1">
                    {formatMessage({
                      id: 'dms.images.tag',
                    })}
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation();
                  onEdit({ ...image, status: status === 'active' ? 'inactive' : 'active' });
                  onMenuClose();
                }}
              >
                <EditIcon classes={{ root: classes.menuIcon }} />
                <Box ml={2}>
                  <Typography variant="subtitle1">
                    {formatMessage({
                      id: 'dms.images.inactive',
                    })}
                  </Typography>
                </Box>
                <Box ml="auto">
                  <Checkbox color="primary" checked={status === 'active'} name="checkedA" />
                </Box>
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation();
                  handleDeleteImage();
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
            </Menu>
          </div>
        </Box>
        <Box width="100%" display="flex" flexDirection="column" alignItems="space-between">
          <Box display="flex" flexDirection="column" mb={1} flex={1}>
            <Typography className={classes.date}>
              {DateTime.fromISO(new Date(createdAt.toString()).toISOString()).toRelative({
                locale: intl.locale,
              })}
            </Typography>
            <Box mt={1.25}>
              <Typography className={classes.title}>{name}</Typography>
            </Box>
            <Typography className={classes.subtitle}>
              {type}, {size}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap">
            {tags.length
              ? tags.map(label => (
                  <Box key={label} mr={1} mt={0.5}>
                    <Chip variant="outlined" color="primary" label={label} size="small" />
                  </Box>
                ))
              : null}
          </Box>
        </Box>
      </Box>

      {/* show edit/delete dialog */}
      {dialog}
    </Box>
  );
};
