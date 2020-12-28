import React, { useCallback, useState } from 'react';

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

  return (
    <Documents
      {...props}
      path={path}
      onAddFolder={handleAddFolder}
      onDeleteFolder={handleRemoveFolder}
      onUpdateFolder={handleUpdateFolder}
      documents={documents}
    />
  );
};
