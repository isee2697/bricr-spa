export type ConfirmModalProps = {
  emoji?: string;
  title: string;
  onCancel: VoidFunction;
  onConfirm: VoidFunction;
  messageLineFirst: string;
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
