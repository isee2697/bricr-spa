import React from 'react';

import { ColumnModal, DocumentViewModal } from 'ui/molecules';
import { FileType } from '../CardWithTable.types';
import { UploadModal } from 'ui/organisms';

import { CardListViewModalsProps } from './CardTableModals.types';

export const CardTableModals = ({ viewer, columns, upload }: CardListViewModalsProps) => {
  return (
    <>
      <ColumnModal<FileType>
        {...columns}
        onClose={() => columns.onClose(false)}
        onApply={items => {
          columns.onApply(items);
          columns.onClose(false);
        }}
      />
      <DocumentViewModal {...viewer} onClose={() => viewer.onClose(false)} />
      <UploadModal
        {...upload}
        onClose={() => upload.onClose(false)}
        onUpload={files => {
          upload.onUpload(files);
          upload.onClose(false);
        }}
      />
    </>
  );
};
