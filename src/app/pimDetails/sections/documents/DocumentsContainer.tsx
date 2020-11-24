import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader, NavBreadcrumb } from 'ui/atoms';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { PIM_DOCUMENTS } from 'api/mocks/pim';

import { Documents } from './Documents';
import { DocumentFolderType, DocumentMeta } from './Documents.types';

export const DocumentsContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const [documents, setDocuments] = useState<DocumentFolderType[]>(PIM_DOCUMENTS.documents);
  const metaInfo: DocumentMeta[] = PIM_DOCUMENTS.metaInfo;
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  const handleAddFolder = async (name: string) => {
    documents.push({ id: String(Math.floor(Math.random() * 10000)), name, isCustom: true });
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
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/documents"
        title={formatMessage({ id: 'pim_details.documents.title' })}
      />
      <Documents
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        title={title}
        documents={documents}
        metaInfo={metaInfo}
        onAdd={handleAddFolder}
        onRemove={handleRemoveFolder}
        onUpdate={handleUpdateFolder}
      />
    </>
  );
};
