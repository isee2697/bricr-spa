import { Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';

import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Page } from '../Page';
import { Box, Grid } from 'ui/atoms';
import { CardWithFolder } from '../../cards/cardWithFolder/CardWithFolder';
import { useLocale } from 'hooks';
import { DocumentFolderType } from 'app/crmRelationsDetails/documents/Documents.types';
import { CardWithTable } from '../../cards/cardWithTable/CardWithTable';
import { FileType, FileTypeView } from '../../cards/cardWithTable/CardWithTable.types';
import { EMAILS } from 'api/mocks/email';
import { ClockIcon, HomeIcon } from 'ui/atoms/icons';
import { DmsFolder } from '../../../../api/types';

import { PageWithFolderListCardProps } from './PageWithFolderListCard.types';

const actions = {
  onReply: { exec: () => {}, icon: <HomeIcon /> },
  replyToAll: { exec: () => {}, icon: <ClockIcon /> },
  forWard: { exec: () => {}, icon: <ClockIcon /> },
  markAsUnread: { exec: () => {}, icon: <ClockIcon /> },
  addAsRelation: { exec: () => {}, icon: <ClockIcon /> },
  linkToSales: { exec: () => {}, icon: <ClockIcon /> },
  linkToPim: { exec: () => {}, icon: <ClockIcon /> },
  linkToCalendar: { exec: () => {}, icon: <ClockIcon /> },
  archive: { exec: () => {}, icon: <ClockIcon /> },
};

export const PageWithFolderListCard = ({
  onSidebarOpen,
  isSidebarVisible,
  path,
  folders,
  onAddFolder,
  onDeleteFolder,
  onUpdateFolder,
  onUploadFiles,
}: PageWithFolderListCardProps) => {
  const { formatMessage } = useLocale();

  const isEmailFolder = false;

  const [selectedFolder, setSelectedFolder] = useState<DmsFolder | null>(null);

  const handleUploadFiles = useCallback(
    (folder: DmsFolder, files: File[]) => {
      onUploadFiles?.(folder, files);
    },
    [onUploadFiles],
  );

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center">
            <Typography variant="h1">{formatMessage({ id: 'crm.details.documents.document_folders' })}</Typography>
          </Box>
        </Grid>
        <Grid data-testid={'card-with-folder'} item xs={12}>
          <CardWithFolder
            path={`${path}/folders`}
            foldersData={folders}
            isLoading={false}
            isError={false}
            setSelectedFolder={setSelectedFolder}
            onAddFolder={onAddFolder}
            onDeleteFolder={onDeleteFolder}
            onUpdateFolder={onUpdateFolder}
            onUploadFiles={onUploadFiles}
            selectedFolder={selectedFolder}
          />
          {selectedFolder && (
            <Box data-testid="card-with-table" mt={3.5}>
              <CardWithTable<FileType>
                onAdd={() => {}}
                titleId={selectedFolder.foldername}
                titleAmount={0}
                view={isEmailFolder ? FileTypeView.Email : FileTypeView.File}
                files={[]}
                onUploadFiles={files => handleUploadFiles(selectedFolder, files)}
                actions={{
                  onEdit: { exec: () => {} },
                  onDelete: { exec: () => {} },
                  ...(isEmailFolder ? actions : {}),
                }}
              />
            </Box>
          )}
        </Grid>
      </Page>
    </>
  );
};
