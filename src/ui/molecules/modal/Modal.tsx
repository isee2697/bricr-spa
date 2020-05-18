import React from 'react';

import { Dialog, DialogTitle, IconButton, Zoom } from 'ui/atoms';
import { CloseIcon } from 'ui/atoms/icons/close/CloseIcon';

import { ModalProps } from './Modal.types';

export const Modal = ({ children, title, isOpened, onClose, ...props }: ModalProps) => {
  return (
    <Dialog TransitionComponent={Zoom} open={isOpened} onClose={onClose} {...props}>
      <DialogTitle id="alert-dialog-title">
        {title}
        {!!onClose && (
          <IconButton
            aria-label="close"
            variant="roundedContained"
            size="small"
            onClick={e => onClose(e, 'escapeKeyDown')}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      {children}
    </Dialog>
  );
};
