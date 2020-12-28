import React, { useState } from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Loader } from 'ui/atoms';
import { PIM_DOCUMENTS } from 'api/mocks/pim';

import { DocumentsGeneral } from './General';
import { DocumentFolderType, DocumentKind, DocumentMeta } from './General.types';

export const DocumentsGeneralContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const [documents, setDocuments] = useState<DocumentFolderType[]>(PIM_DOCUMENTS.documents);
  const metaInfo: DocumentMeta[] = PIM_DOCUMENTS.metaInfo;

  const handleAddFolder = async (name: string) => {
    documents.push({ id: String(Math.floor(Math.random() * 10000)), name, kind: DocumentKind.Custom });
    setDocuments([...documents]);
  };

  const handleUpdateFolder = async (document: DocumentFolderType) => {
    const index = documents.findIndex(item => item.id === document.id);
    documents[index] = document;
    setDocuments([...documents]);
  };

  const handleRemoveFolder = async (id: string) => {
    const index = documents.findIndex(item => item.id === id);
    documents.splice(index, 1);
    setDocuments([...documents]);
  };

  if (!documents) {
    return <Loader />;
  }

  return (
    <DocumentsGeneral
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      title={title}
      documents={documents}
      metaInfo={metaInfo}
      onAdd={handleAddFolder}
      onRemove={handleRemoveFolder}
      onUpdate={handleUpdateFolder}
    />
  );
};
