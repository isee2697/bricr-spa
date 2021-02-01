import React, { useState } from 'react';

import { Page } from 'ui/templates';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { useLocale } from 'hooks';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';

import { DocumentFolders } from './documentFolders/DocumentFolders';
import { DocumentFolderType, DocumentsGeneralProps } from './General.types';

export const DocumentsGeneral = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
  documents,
  onAdd,
  onRemove,
  onUpdate,
}: DocumentsGeneralProps) => {
  const { formatMessage } = useLocale();
  const [selectedFolder, setSelectedFolder] = useState<DocumentFolderType | null>(null);

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page
        title={formatMessage({ id: 'pim_details.documents.document_folders' })}
        titleActions={
          selectedFolder ? (
            <Button size="small" variant="contained" color="primary" startIcon={<AddIcon color="inherit" />}>
              {formatMessage({ id: 'pim_details.documents.document_folders.create_document' })}
            </Button>
          ) : (
            <></>
          )
        }
      >
        <DocumentFolders
          foldersData={[...documents].sort((document1, document2) => (document1.name < document2.name ? -1 : 1))}
          isLoading={false}
          isError={false}
          onAddFolder={onAdd}
          onDeleteFolder={onRemove}
          onUpdateFolder={onUpdate}
          selectedFolder={selectedFolder}
          onSelectFolder={setSelectedFolder}
        />
      </Page>
    </>
  );
};
