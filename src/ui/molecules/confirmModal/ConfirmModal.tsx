import { ButtonProps } from '@material-ui/core/Button/Button';
import React from 'react';

import { InfoSection, Modal, SubmitButton } from 'ui/molecules';
import { DialogActions, Typography } from 'ui/atoms';

import { useStyles } from './ConfirmModal.styles';
import { ConfirmButtonType, ConfirmModalProps } from './ConfirmModal.types';

const confirmButtonPropsMap: Record<ConfirmButtonType, ButtonProps> = {
  [ConfirmButtonType.INFO]: { color: 'primary', variant: 'contained' },
  [ConfirmButtonType.ERROR]: { color: 'secondary', variant: 'outlined' },
};

export const ConfirmModal = ({
  emoji,
  onCancel,
  onConfirm,
  messageLineFirst,
  messageLineSecond,
  cancelText,
  confirmText,
  isLoading,
  confirmButtonType = ConfirmButtonType.INFO,
  isOpened,
  title,
}: ConfirmModalProps) => {
  const classes = useStyles();

  return (
    <Modal isOpened={isOpened} title={title} onClose={onCancel} fullWidth titleClassName={classes.title}>
      <InfoSection emoji={emoji} className={classes.info}>
        <Typography variant="h3">{messageLineFirst}</Typography>
        {messageLineSecond && <Typography variant="h3">{messageLineSecond}</Typography>}
      </InfoSection>
      <DialogActions classes={{ root: classes.actions }}>
        <SubmitButton onClick={onCancel} size="large" color="primary" variant="outlined">
          {cancelText}
        </SubmitButton>
        <SubmitButton
          onClick={onConfirm}
          isLoading={isLoading}
          type="submit"
          size="large"
          {...confirmButtonPropsMap[confirmButtonType]}
        >
          {confirmText}
        </SubmitButton>
      </DialogActions>
    </Modal>
  );
};
