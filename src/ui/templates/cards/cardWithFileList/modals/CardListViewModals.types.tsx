import { IDocument } from 'react-doc-viewer/build/types';

import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { FileType } from '../CardWithFileList.types';

type ModalListProps = {
  isOpened: boolean;
  onClose: (bool: boolean) => void;
};

export type CardListViewModalsProps = {
  viewer: ModalListProps & { documents: IDocument[] };
  upload: ModalListProps & { onUpload: (files: File[]) => void };
  columns: ModalListProps & {
    columns: HeaderColumnItemType<FileType>[];
    onApply: (columns: HeaderColumnItemType<FileType>[]) => void;
  };
};
