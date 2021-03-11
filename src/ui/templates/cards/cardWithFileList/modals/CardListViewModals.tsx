import React from 'react';

import { ColumnModal, DocumentViewModal } from 'ui/molecules';
import { FileType } from 'ui/templates/cards/cardWithFileList/CardWithFileList.types';
import { UploadModal } from 'ui/organisms';

import { CardListViewModalsProps } from './CardListViewModals.types';

export const CardListViewModals = ({ viewer, columns, upload }: CardListViewModalsProps) => {
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
