import React, { useCallback, useState } from 'react';
import * as uuid from 'uuid';
import { DateTime } from 'luxon';

import { CRM_DOCUMENT_FOLDERS } from 'api/mocks/crm-relation';

import { Documents } from './Documents';
import { DocumentFolderType, DocumentsContainerProps } from './Documents.types';

export const DocumentsContainer = ({ path, ...props }: DocumentsContainerProps) => {
  const [documents, setDocuments] = useState<DocumentFolderType[]>(CRM_DOCUMENT_FOLDERS);

  const handleAddFolder = useCallback(
    async (name: string) => {
      documents.push({ id: String(Math.floor(Math.random() * 10000)), name });
      setDocuments([...documents]);
    },
    [documents],
  );

  const handleUpdateFolder = useCallback(
    async (document: DocumentFolderType) => {
      const index = documents.findIndex(item => item.id === document.id);
      documents[index] = document;
      setDocuments([...documents]);
    },
    [documents],
  );

  const handleRemoveFolder = useCallback(
    async (id: string) => {
      const index = documents.findIndex(item => item.id === id);
      documents.splice(index, 1);
      setDocuments([...documents]);
    },
    [documents],
  );

  const handleUploadFiles = useCallback(
    (folder: DocumentFolderType, files: File[]) => {
      if (!folder.documents) folder.documents = [];
      folder.documents = [
        ...folder.documents,
        ...files.map(item => ({
          id: uuid.v4(),
          image: '',
          dateCreated: DateTime.fromJSDate(new Date()),
          name: item.name,
          stepsCompleted: [],
          size: item.size,
          type: item.type,
        })),
      ];
      handleUpdateFolder(folder);
    },
    [handleUpdateFolder],
  );

  return (
    <Documents
      {...props}
      path={path}
      onAddFolder={handleAddFolder}
      onDeleteFolder={handleRemoveFolder}
      onUpdateFolder={handleUpdateFolder}
      onUploadFiles={handleUploadFiles}
      documents={documents}
    />
  );
};
