import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { BulkOperations } from 'api/types';

export type BulkActionConfirmModalProps = {
  type: Omit<BulkOperations, 'SetField'>;
  onConfirm: () => Promise<void>;
  onCancel: VoidFunction;
  itemName?: string;
  count: number;
  isOpened: boolean;
};

export type BulkActionConfigMapType = {
  emoji: string;
  title: string;
  messageLineFirst: string;
  messageLineSecond?: string;
  cancelText: string;
  confirmText: string;
  confirmButtonType?: ConfirmButtonType;
};
