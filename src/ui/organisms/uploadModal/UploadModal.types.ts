import { DialogProps } from '@material-ui/core/Dialog';

export type UploadModalProps = Omit<DialogProps, 'open' | 'onClose'> & {
  isOpened: boolean;
  isSubmitting?: boolean;
  onClose: VoidFunction;
  onUpload: (files: File[]) => void;
};

export type UploadModalImageProps = {
  file: File;
  onRemove: () => void;
};
