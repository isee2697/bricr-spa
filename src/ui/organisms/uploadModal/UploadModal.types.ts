import { DialogProps } from '@material-ui/core/Dialog';

export type UploadModalProps = Omit<DialogProps, 'open' | 'onClose'> & {
  isOpened: boolean;
  onClose: VoidFunction;
  onUpload: (files: string[]) => void;
};
