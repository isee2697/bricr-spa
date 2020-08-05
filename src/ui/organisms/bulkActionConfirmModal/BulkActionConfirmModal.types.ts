import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';

export type BulkActionConfirmModalProps = {
  type: BulkActionType;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
  itemName?: string;
  count: number;
  isOpened: boolean;
};

export enum BulkActionType {
  DELETE = 'Delete',
  ARCHIVE = 'Archive',
}

export type BulkActionConfigMapType = {
  emoji: string;
  title: string;
  messageLineFirst: string;
  messageLineSecond?: string;
  cancelText: string;
  confirmText: string;
  confirmButtonType?: ConfirmButtonType;
};
