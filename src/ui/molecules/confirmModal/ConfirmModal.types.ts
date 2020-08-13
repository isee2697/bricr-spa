import { ReactNodeArray } from 'react';

export type ConfirmModalProps = {
  emoji?: string;
  title: string;
  onCancel: VoidFunction;
  onConfirm: VoidFunction;
  messageLineFirst: string | ReactNodeArray;
  messageLineSecond?: string;
  cancelText: string;
  confirmText: string;
  confirmButtonType?: ConfirmButtonType;
  isLoading?: boolean;
  isOpened: boolean;
};

export enum ConfirmButtonType {
  ERROR = 'Error',
  INFO = 'Info',
}
