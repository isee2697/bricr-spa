import React, { useRef, useState, ReactNode, useEffect, useCallback } from 'react';
import clsx from 'clsx';

import { Badge, Box, Typography } from 'ui/atoms';
import { AddIcon, CloseIcon, DirectoryBorderedIcon, DirectoryOpenedIcon, FolderIcon } from 'ui/atoms/icons';
import { ConfirmModal } from 'ui/molecules/index';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { useLocale } from 'hooks';

import { useStyles } from './FolderContainer.styles';
import { FolderContainerProps } from './FolderContiner.types';

export const FolderContainer = ({
  id,
  name,
  type,
  childCount: defaultChildCount,
  isOpened,
  isAdd,
  onClick,
  onRemove,
  onRename,
}: FolderContainerProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const variant = type === 'primary' ? 'aqua' : 'purple';
  const childCount = defaultChildCount || 0;
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleStartRenaming = useCallback(() => {
    if (onRename) {
      setIsRenaming(true);
      inputRef.current?.select();
    }
  }, [onRename]);

  const handleEndRenaming = useCallback(() => {
    if (onRename) {
      if (inputRef.current?.value) {
        onRename?.(inputRef.current?.value);
        setIsRenaming(false);
      }
    }
  }, [onRename]);

  const handleChange = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleEndRenaming();
      }
    },
    [handleEndRenaming],
  );

  const handleRemove = useCallback(() => {
    if (onRemove) {
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
            onRemove();
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
  }, [formatMessage, onRemove]);

  useEffect(() => {
    window.addEventListener('click', handleEndRenaming);

    return () => window.removeEventListener('click', handleEndRenaming);
  }, [handleEndRenaming]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className={classes.root}>
      {isOpened && <DirectoryOpenedIcon className={classes.openedWrapper} />}
      <Box className={clsx(classes.iconWrapper, isAdd && classes.addWrapper)} onClick={onClick}>
        {onRemove && type === 'secondary' && (
          <Badge
            className={classes.removeBadge}
            onClick={e => {
              e.stopPropagation();
              handleRemove();
            }}
            badgeContent={<CloseIcon />}
            color="error"
          />
        )}
        {isAdd ? (
          <>
            <DirectoryBorderedIcon className={classes.icon} />
            <Box className={classes.addIcon}>
              <AddIcon />
            </Box>
          </>
        ) : (
          <>
            <FolderIcon id={id + '_' + type} variant={variant} weight={childCount} className={classes.icon} />
            <Box className={clsx(classes.iconBadge, variant)}>{childCount || '-'}</Box>
          </>
        )}
      </Box>

      <Box>
        {type !== 'primary' && (
          <input
            className={clsx(classes.editBox, !isRenaming && classes.hidden)}
            ref={inputRef}
            defaultValue={name}
            onKeyDown={handleChange}
            onClick={e => e.stopPropagation()}
          />
        )}

        <Typography
          className={clsx(type !== 'primary' && isRenaming && classes.hidden)}
          variant="h6"
          align="center"
          onClick={e => {
            e.stopPropagation();
            handleStartRenaming();
          }}
        >
          {name}
        </Typography>
      </Box>

      {/* show dialog */}
      {dialog}
    </Box>
  );
};
