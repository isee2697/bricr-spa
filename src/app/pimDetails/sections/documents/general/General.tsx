import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { useLocale } from 'hooks';

import { DocumentFolders } from './documentFolders/DocumentFolders';
import { DocumentsGeneralProps } from './General.types';

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

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Typography variant="h1">{formatMessage({ id: 'pim_details.documents.document_folders' })}</Typography>
        </Grid>
        <DocumentFolders
          foldersData={[...documents].sort((document1, document2) => (document1.name < document2.name ? -1 : 1))}
          isLoading={false}
          isError={false}
          onAddFolder={onAdd}
          onDeleteFolder={onRemove}
          onUpdateFolder={onUpdate}
        />
      </Page>
    </>
  );
};
