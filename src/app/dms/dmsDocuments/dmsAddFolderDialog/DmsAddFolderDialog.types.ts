import { PromiseFunction } from 'app/shared/types';

export type DmsAddFolderDialogProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<{ folderName: string }>;
  isSubmitting?: boolean;
  isAdd?: boolean;
  folderName?: string;
};
