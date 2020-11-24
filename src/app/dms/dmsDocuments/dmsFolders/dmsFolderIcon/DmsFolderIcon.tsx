import React, { useRef, useState, ReactNode } from 'react';
import clsx from 'clsx';

import { Badge, Box, Typography } from 'ui/atoms';
import { AddIcon, CloseIcon, DirectoryBorderedIcon, DirectoryIcon, DirectoryOpenedIcon } from 'ui/atoms/icons';
import { ConfirmModal } from 'ui/molecules';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { useLocale } from 'hooks';

import { useStyles } from './DmsFolderIcon.styles';
import { DmsFolderIconProps } from './DmsFolderIcon.types';

export const DmsFolderIcon = ({
  id,
  name,
  type: defaultType,
  childCount: defaultChildCount,
  isOpened,
  isAdd,
  onClick,
  onRemove,
  onRename,
}: DmsFolderIconProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const type = isOpened ? 'primary' : defaultType;
  const childCount = defaultChildCount || 0;
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleStartRenaming = () => {
    if (onRename) {
      setIsRenaming(true);
      inputRef.current?.select();
    }
  };

  const handleEndRenaming = () => {
    if (onRename) {
      if (inputRef.current?.value) {
        onRename?.(inputRef.current?.value);
        setIsRenaming(false);
      }
    }
  };

  const handleChange = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEndRenaming();
    }
  };

  window.addEventListener('click', () => {
    handleEndRenaming();
  });

  const handleRemove = () => {
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
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className={classes.root}>
      {isOpened && <DirectoryOpenedIcon className={classes.openedWrapper} />}
      <Box className={clsx(classes.iconWrapper, isAdd && classes.addWrapper)} onClick={onClick}>
        {onRemove && (
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
            <DirectoryIcon
              id={id + '_' + type}
              variant={type}
              weight={Math.floor(childCount / 10)}
              className={classes.icon}
            />
            <Box className={clsx(classes.iconBadge, type)}>{childCount || '-'}</Box>
          </>
        )}
      </Box>
      <Box>
        <input
          className={clsx(classes.editBox, !isRenaming && classes.hidden)}
          ref={inputRef}
          defaultValue={name}
          onKeyDown={handleChange}
          onClick={e => e.stopPropagation()}
        />
        <Typography
          className={clsx(isRenaming && classes.hidden)}
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
